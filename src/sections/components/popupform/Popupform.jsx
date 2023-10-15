import React, { useState } from "react";
import "./Popupform.css"; // Import the CSS stylesheet

import { useContext } from "react";
import { EmpContext } from "../../context/EmpContext";

function EmployeeForm() {
  // 1-only for add employee

  const { employeeData, setEmployeeData } = useContext(EmpContext);

  const checkEmployeeById = (id) => {
    return employeeData.find((employee) => employee.empId === id);
  };

  // 1-only for add employee

  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    gender: "male",
    isActive: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2-only for add employee

    if (checkEmployeeById(formData.empId)) {
      alert(`An Employee with Id ${formData.empId} already exist`);
    } else {
      setEmployeeData((prev) => [...prev, formData]);
    }

    // only for add employee
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>
            Is Active
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
