import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import BootstrapTable from "react-bootstrap-table-next";
// import PersonService from "../services/PersonService";
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


const jobsTypes = ['A', 'B', 'C', 'D'];
const EyeColor = ['Brown', 'Blue', 'Green', 'Hazel'];


const cellEditProp = {
    mode: 'click',
    blurToSave: true
};

export default class editTypeTable extends React.Component {
    render() {
        return ( 
        <BootstrapTable data ={ jobsTypes } cellEdit ={ cellEditProp } version='4'>
            <TableHeaderColumn dataField = 'id' isKey ={ true }>Person ID</TableHeaderColumn>
            <TableHeaderColumn dataField = 'name' editable ={ { type: 'textarea' } }>Last Name</TableHeaderColumn> 
            <TableHeaderColumn dataField = 'name' editable ={ { type: 'textarea' } }>First Name</TableHeaderColumn> 
            <TableHeaderColumn dataField = 'type' editable ={ { type: 'select', options: { values: EyeColor } } }>Eye Color</TableHeaderColumn>
            <TableHeaderColumn dataField = 'name' editable ={ { type: 'textarea' } }>Email</TableHeaderColumn> 
            <TableHeaderColumn dataField = 'name' editable ={ { type: 'textarea' } }>Address</TableHeaderColumn> 
            <TableHeaderColumn dataField = 'active' editable = { { type: 'checkbox', options: { values: 'Y:N' } } }>Active </TableHeaderColumn> 
            <TableHeaderColumn dataField = 'datetime' editable = { { type: 'datetime' } }>Date Time</TableHeaderColumn>
        </BootstrapTable>
        );
    }
}


// const columns = [
//     {
//         dataField: "id",
//         text: "Person ID"
//     },
//     {
//         dataField: "name.last",
//         text: "Last Name"
//     },
//     {
//         dataField: "name.first",
//         text: "First Name"
//     },
//     {
//         dataField: "eyeColor",
//         text: "Eye Color"
//     },
//     {
//         dataField: "email",
//         text: "Email"
//     },
//     {
//         dataField: "address",
//         text: "Address"
//     }
// ];