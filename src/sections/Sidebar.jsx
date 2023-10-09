import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";


export const Sidebar = () => {
  return (
    <>
      <nav className="side-nav-section">
        <div className="logo">
          <h3 className="logo-name">Mushkil Nahi</h3>
        </div>
        <NavLink to="/" className="side-nav-item">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="logo-name">Dashboard</span>
        </NavLink>
        <NavLink to="/" className="side-nav-item">
          <span className="material-symbols-outlined">badge</span>
          <span className="logo-name">Employee</span>
        </NavLink>
        <NavLink to="/allocatesalary" className="side-nav-item">
          <span className="material-symbols-outlined">approval_delegation</span>
          <span className="logo-name">Allocate Salary</span>
        </NavLink>
        <NavLink to="/" className="side-nav-item">
          <span className="material-symbols-outlined">badge</span>
          <span className="logo-name">Nav Item1</span>
        </NavLink>
      </nav>
    </>
  );
};
