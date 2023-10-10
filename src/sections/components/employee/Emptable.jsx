import React  from "react";
import "./EmpTable.css";
import { useContext } from "react";
import {EmpContext} from '../../context/EmpContext'



export default function Emptable() {
  const {employeeData} = useContext(EmpContext);

  return (
    <>
      <div className="emp-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Emp ID</th>
            <th>Gender</th>
          </tr>
          {employeeData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.empId}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
