import React, { Component, useState, useEffect } from 'react';
import './App.css';
import API from "./utils/api";
import EmployeeCard from "./components/employeeCard";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Holds the newly fetched data for storing it inot the employee list using set state
var tempArray;

function App () {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {

    API.getEmployees()
      .then((res) => (tempArray = res.data.results))
      .then(() => setEmployees(tempArray))
      .catch((error) => console.log(error));
  }, [])

  const getGender = (gender) => {
    return tempArray.filter((employee) => employee.gender === gender);
  };

  const searchMales = () =>
    getGender("male").map((employee) => (
      <EmployeeCard
        key={employee.name.first + employee.name.last}
        firstName={employee.name.first}
        lastName={employee.name.last}
        email={employee.email}
        phone={employee.phone}
        src={employee.picture.medium}
      />
    ));

    const searchFemales = () =>
      getGender("female").map((employee) => (
        <EmployeeCard
          key={employee.name.first + employee.name.last}
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          phone={employee.phone}
          src={employee.picture.medium}
        />
      ));

      const emptySearch = () =>
        employees.map((employee) => (
          <EmployeeCard
            key={employee.name.first + employee.name.last}
            firstName={employee.name.first}
            lastName={employee.name.last}
            email={employee.email}
            phone={employee.phone}
            src={employee.picture.medium}
          />
        ));


 
    return (
      <Router>
        <h1> Welcome to The Employee Directory</h1>
        <SearchBar />

        <Route exact path="/" component={emptySearch}/>
        <Route exact path="/employees/male" component={searchMales}/>
        <Route exact path="/employees/female" component={searchFemales} />

      </Router>
    );
}

export default App;
