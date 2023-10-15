import React, { useState, createContext } from "react";

export const EmpContext = createContext();

export const EmpProvider = ({ children }) => {

  // Employee data 

  const [employeeData, setEmployeeData] = useState([
    { name: "Alavi", empId: "OMC001", gender: "Male" },
    { name: "Favas", empId: "OMC003", gender: "Female" },
    { name: "Haseen", empId: "OMC004", gender: "Male" },
  ]);


  const [activeRow, setActiveRow] = useState(null)         
  const [activeEmployee, setActiveEmployee] = useState(null)         
  

  const handleRowClick = (id) => {
    setActiveRow(id === activeRow ? null : id);
    setActiveEmployee((employeeData.find(item => item.empId === id)).name);
  };
  
  const deleteEmployee =(id)=>{
    const updatedData = employeeData.filter((employee) => employee.empId !== id);
    setEmployeeData(updatedData);
  }

  return (
    <EmpContext.Provider value={{ employeeData, setEmployeeData, activeRow,setActiveRow, activeEmployee, handleRowClick,deleteEmployee }}>
      {children}
    </EmpContext.Provider>
  );
};
