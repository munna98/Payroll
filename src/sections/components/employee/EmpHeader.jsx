import React from "react";
import Popup from "reactjs-popup";
import EmployeeForm from "../popupform/Popupform";
import './EmpHeader.css'
import { Search } from "../Search";


export default function EmpHeader() {

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
          <span>U Are Deleting Munna..!</span>
          <button>Yes</button>
          </div>
        </Popup>
      </div>
    </>
  );
}
