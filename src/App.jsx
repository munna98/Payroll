
import { Sidebar } from "./sections/Sidebar";
import { Employee } from "./sections/components/employee/Employee";
import { AllocateSalary } from "./sections/components/allocatesalary/AllocateSalary";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Employee />
      {/* <AllocateSalary /> */}
    </>
  );
}

export default App;
