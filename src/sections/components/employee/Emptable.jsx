import React from "react";
import Popup from "reactjs-popup";
import EmployeeForm from "../popupform/Popupform";
import { Search } from "../Search";
import "./Emptable.css";

export default function Emptable() {
  const data = [
    { name: "Alavi", EmpID: "OMC001", gender: "Male" },
    { name: "Favas", EmpID: "OMC003", gender: "Female" },
    { name: "Haseen", EmpID: "OMC004", gender: "Male" },
    { name: "Munna", EmpID: "OMC002", gender: "Male" },
    { name: "Favas", EmpID: "OMC005", gender: "Female" },
  ];
  return (
    <>
      <div className="emptable-header">
        <Popup
          trigger={
              <i className="material-symbols-outlined person-add">person_add</i>

          }
          position="right center"
        >
          <EmployeeForm/>
        </Popup>

        <Search />
        <Popup
          trigger={
              <i className="material-symbols-outlined edit">edit</i>

          }
          position="left center"
        >
          <EmployeeForm/>
        </Popup>

        <Popup
          trigger={
            <i className="material-symbols-outlined delete">delete</i>

          }
          position="top right "
        >
          <div className="delete-warninig">
          <span>U Are Deleting Munna..!</span>
          <button>Yes</button>
          </div>
        </Popup>
      </div>
      <div className="emp-table">
        <table>
          <tr>
            <th>Name</th>
            <th>EmpID</th>
            <th>Gender</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.EmpID}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
