import React from "react";

//Passing in the data into the component using props
function EmployeeCard(props) {
  return (
    <div>
      <div className="employeeCard">
        <img src={props.src} alt={props.firstName}></img>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
      <hr></hr>
    </div>
  );
}

export default EmployeeCard;
