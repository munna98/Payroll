import React from "react";
import "./EmpTable.css";
import { useContext} from "react";
import {EmpContext} from '../../context/EmpContext'



export default function Emptable() {

  const {employeeData, activeRow, handleRowClick} = useContext(EmpContext);




  return (
    <>
  <div className="emp-table">
        <table >
          <tr>
            <th>Name</th>
            <th>Emp ID</th>
            <th>Gender</th>
          </tr>
          {employeeData.map((val) => {
            return (
              <tbody key={val.empId} className={activeRow === val.empId? 'active' : ''}
              onClick={() => handleRowClick(val.empId)} >
                <td>{val.name}</td>
                <td>{val.empId}</td>
                <td>{val.gender}</td>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
