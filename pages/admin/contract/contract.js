import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getTravels } from "../../../actions/travelAction";
import Admin from "layouts/Admin.js";

import Travelcard from "./Travelcard";
import CardTableTicket from "components/Cards/TicketSystem";
import { isAdmin } from "actions/authAction";
function Travel(props) {

    useEffect(() => {

        props.getTravels()
        props.isAdmin(props.auth.user.id)
    }, [])
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">

                        <CardTableTicket />
                        <Travelcard travels={props.travels} contract={props.contract} />
                    </div>

                </div>
            </>
        );
    } else return null

}
Travel.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    travels: state.travels,
    contract: state.contract
})

Travel.layout = Admin;
export default connect(mapStateToProps, { getTravels, isAdmin })(Travel)
