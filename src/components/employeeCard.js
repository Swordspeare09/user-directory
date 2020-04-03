import React from "react";
import "./employeeCard.css"

//Passing in the data into the component using props
function EmployeeCard(props) {
  return (
    <div className="card">
      <img className="pro-pic" src={props.src} alt={props.firstName}></img>
      <div className="card-body">
        <h5>
          {props.firstName} {props.lastName}
        </h5>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.phone}</p>
      </div>
      <hr></hr>
    </div>
  );
}

export default EmployeeCard;

