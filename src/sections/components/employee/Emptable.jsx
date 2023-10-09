import React from "react";
import { Search } from "../Search";
import "./Emptable.css";

export default function Emptable() {
  const data = [
    { name: "Alavi", age: 19, gender: "Male" },
    { name: "Favas", age: 19, gender: "Female" },
    { name: "Haseen", age: 25, gender: "Male" },
    { name: "Munna", age: 19, gender: "Male" },
    { name: "Favas", age: 19, gender: "Female" },
  ];
  return (
    <>
      <div className="emptable-header">
        <i className="material-symbols-outlined person-add">person_add</i>
        <Search/>
        <i className="material-symbols-outlined edit">edit</i>
        <i className="material-symbols-outlined delete">delete</i>
      </div>
      <div className="emp-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
