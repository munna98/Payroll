import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./sections/Sidebar";
import { Employee } from "./sections/components/employee/Employee";
import { AllocateSalary } from "./sections/components/allocatesalary/AllocateSalary";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/allocatesalary" element={<AllocateSalary />} />
      </Routes>
    </>
  );
}

export default App;
