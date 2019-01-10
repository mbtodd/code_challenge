import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import People from "./routes/People";
import PeopleOriginal from "./routes/PeopleOriginal";
import PeopleCell from "./routes/PeopleCell";
import PeopleCell2 from "./routes/PeopleCell2";
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <div className="navbar-nav-scroll">
              <ul className="nav">
                {/* <li className="nav-item">
                  <a href="https://facebook.github.io/create-react-app/docs/getting-started">
                    <img src={logo} className="App-logo" alt="logo" />
                  </a>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/people" className="nav-link">
                    People
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/people" className="nav-link">
                    People Original
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/peopleCell" className="nav-link">
                    PeopleCell
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/peopleCell2" className="nav-link">
                    peopleCell2
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>
          <div className="container-fluid">
            <Route path="/" exact component={Home} />
            <Route path="/peopleoriginal" exact component={PeopleOriginal} />
            <Route path="/people" exact component={People} />
            <Route path="/peoplecell" exact component={PeopleCell} />
            <Route path="/peoplecell2" exact component={PeopleCell2} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
