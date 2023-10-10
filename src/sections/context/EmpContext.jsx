import React, { useState, createContext } from "react";

export const EmpContext = createContext();

export const EmpProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([
    { name: "Alavi", empId: "OMC001", gender: "Male" },
    { name: "Favas", empId: "OMC003", gender: "Female" },
    { name: "Haseen", empId: "OMC004", gender: "Male" },
  ]);

  return (
    <EmpContext.Provider value={{ employeeData, setEmployeeData }}>
      {children}
    </EmpContext.Provider>
  );
};
