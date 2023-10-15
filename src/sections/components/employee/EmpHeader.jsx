import React, {useContext} from "react";
import Popup from "reactjs-popup";
import EmployeeForm from "../popupform/Popupform";
import './EmpHeader.css'
import { Search } from "../Search";

import { EmpContext } from "../../context/EmpContext";


export default function EmpHeader() {


const {deleteEmployee,activeRow,activeEmployee} = useContext(EmpContext)



  return (
    <>
      <div className="emp-header-scetion">
        <Popup
          trigger={
              <button className="material-symbols-outlined person-add">person_add</button>

          }
          position="right center"
        >
          <EmployeeForm/>
        </Popup>

        <Search />
        <Popup
          trigger={
              <button className="material-symbols-outlined edit">edit</button>

          }
          position="left center"
        >
          <EmployeeForm/>
        </Popup>

        <Popup
          trigger={
            <button className="material-symbols-outlined delete">delete</button>

          }
          position="top right "
        >
          <div className="delete-warninig">
          <span>U Are Deleting {activeEmployee}..!</span>
          <button onClick={()=>deleteEmployee(activeRow)}>Yes</button>
          </div>
        </Popup>
      </div>
    </>
  );
}
