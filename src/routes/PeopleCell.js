import React, { Component } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
import PersonService from "../services/PersonService";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



// const eyeColor = ['Brown', 'Blue', 'Green', 'Hazel'];


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
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    this.fetch();
  }
  
  async fetch() {
    const people = await PersonService.findAll();
    const data = people.map(p => ({
        ...p,
        firstName: p.name.first,
        lastName: p.name.last
    }));
    this.setState({ data });
  }
  
  render() {
    const { data } = this.state;

    const cellEditProp = {
        mode: 'click',
        blurToSave: true
    };

    console.log(data);

    if (!data) return null;

    return (
    //   <BootstrapTable keyField="id" data={ data } columns={ columns } cellEdit = { cellEditProp } bootstrap4={true} cellEdit = { cellEditProp } />

      <BootstrapTable keyfield="id" data={data}  cellEdit = { cellEditProp } bootstrap4={false} bordered={ true } containerStyle={ { background: 'skyblue' } } version='4'>
          <TableHeaderColumn dataField = 'id' isKey = { true }>Person ID</TableHeaderColumn>
          <TableHeaderColumn dataField = 'lastName' editable = { { type: 'textarea' } }>Last Name</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'firstName' editable = { { type: 'textarea' } }>First Name</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'eyeColor' editable = { { type: 'textarea' } }>Eye Color</TableHeaderColumn> 
          {/* <TableHeaderColumn dataField = 'type' editable = { { type: 'select', options: { values: eyeColor } } }>Eye Color</TableHeaderColumn> */}
          <TableHeaderColumn dataField = 'email' editable = { { type: 'textarea' } }>Email</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'address' editable = { { type: 'textarea' } }>Address</TableHeaderColumn> 
          {/* <TableHeaderColumn dataField = 'active' editable = { { type: 'checkbox', options: { values: 'Y:N' } } }>Active </TableHeaderColumn>  */}
          {/* <TableHeaderColumn dataField = 'datetime' editable = { { type: 'datetime' } }>Date Time</TableHeaderColumn> */}
      </BootstrapTable>
    );
  }
}
