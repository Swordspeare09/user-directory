import React, { Component } from 'react';
import './App.css';
import API from "./utils/api";
import EmployeeCard from "./components/employeeCard";

//Holds the newly fetched data for storing it inot the employee list using set state
var tempArray;

class App extends Component {

  state = {

    employeeList: []
  };

  componentDidMount() {

    API.getEmployees()
      .then(res => (tempArray = res.data.results))
      .then(() => this.setState({ employeeList: tempArray }))
      .catch(error => console.log(error));

  }

  render() {
    return (
      <div>
      
      {this.state.employeeList.map(
        employee => <EmployeeCard 
          firstName={employee.name.first} 
          lastName={employee.name.last}
          email={employee.email} 
          phone={employee.phone} 
          src={employee.picture.medium}
                      />)}
    </div>
    );
  }
}

export default App;
