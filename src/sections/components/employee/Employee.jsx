import React from "react";
import EmpHeader from "./EmpHeader";
import "./Employee.css";
import Emptable from "./EmpTable";

export const Employee = () => {
  return (
    <>
      <section className="main-section">
        <EmpHeader />
        <Emptable />
      </section>
    </>
  );
};
