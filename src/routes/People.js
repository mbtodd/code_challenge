import React, { Component } from "react";
import PersonService from "../services/PersonService";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const eyeColor = ['Brown', 'Blue', 'Green', 'Hazel'];


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
      <BootstrapTable keyfield="id" data={data}  cellEdit = { cellEditProp } bootstrap4={false} bordered={ true } containerStyle={ { background: 'lightblue' } } version='4' hover>
          <TableHeaderColumn dataField = 'id' width='400px' isKey = { true }>Person ID</TableHeaderColumn>
          <TableHeaderColumn dataField = 'lastName' width='120px' editable = { { type: 'textarea' } }>Last Name</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'firstName' width='120px' editable = { { type: 'textarea' } }>First Name</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'type' width='200px' editable = { { type: 'select', options: { values: eyeColor } } }>Eye Color</TableHeaderColumn>
          <TableHeaderColumn dataField = 'email' width='400px' editable = { { type: 'textarea' } }>Email</TableHeaderColumn> 
          <TableHeaderColumn dataField = 'address' editable = { { type: 'textarea' } }>Address</TableHeaderColumn> 
      </BootstrapTable>
    );
  }
}
