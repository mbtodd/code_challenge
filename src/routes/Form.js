import React, { Component } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
import PersonService from "../services/PersonService";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';





// const jobTypes = ['A', 'B', 'C', 'D'];
const EyeColor = ['Brown', 'Blue', 'Green', 'Hazel'];


const columns = [
  {
    dataField: "id",
    text: "Person ID"
  },
  {
    dataField: "name.last",
    text: "Last Name"
  },
  {
    dataField: "name.first",
    text: "First Name"
  },
  {
    dataField: "eyeColor",
    text: "Eye Color"
  },
  {
    dataField: "email",
    text: "Email"
  },
  {
    dataField: "address",
    text: "Address"
  }
];




export default class PeopleViewer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  componentDidMount() {
    this.fetch();
  }
  
  async fetch() {
    const data = await PersonService.findAll();
    // console.warn('got data length '+ data.length)
    this.setState({ data });
  }
  
  render() {
    const { data } = this.state;

    const cellEditProp = {
        mode: 'click',
        blurToSave: true
    };

    if (!data) return null;

    return (
      // <BootstrapTable keyField="id" data={data} columns={columns} cellEdit = { cellEditProp } bootstrap4={true} cellEdit = { cellEditProp } />

      <BootstrapTable keyfield="id" data={data}  columns={columns} cellEdit = { cellEditProp } bootstrap4={true}>
          <TableHeaderColumn dataField = 'id' isKey = { true }>Person ID</TableHeaderColumn>
          <TableHeaderColumn dataField = 'name' editable = { { type: 'textarea' } }>Last Name</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'name' editable = { { type: 'textarea' } }>First Name</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'type' editable = { { type: 'select', options: { values: EyeColor } } }>Eye Color</TableHeaderColumn>
          <TableHeaderColumn dataField = 'name' editable = { { type: 'textarea' } }>Email</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'name' editable = { { type: 'textarea' } }>Address</TableHeaderColumn> 
          {/* <TableHeaderColumn dataField = 'active' editable = { { type: 'checkbox', options: { values: 'Y:N' } } }>Active </TableHeaderColumn>  */}
          {/* <TableHeaderColumn dataField = 'datetime' editable = { { type: 'datetime' } }>Date Time</TableHeaderColumn> */}
      </BootstrapTable>
    );
  }
}
