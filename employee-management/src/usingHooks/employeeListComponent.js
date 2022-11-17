import { useState, useEffect } from "react";
import EmployeeDetails from "./employeeDetails";
import CreateEmployee from "./createEmployee";
import Axios from "axios";
import { findAllInRenderedTree } from "react-dom/test-utils";

export default function EmployeeListComponent() {
    var [employeeList, setEmployeeList] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data);
        });
    }, []);
    
    function deleteEmployee(employeeId) {
        Axios.delete("http://localhost:4000/employees/" + employeeId).then((response) => {
            var newEmployeeList = employeeList.filter((employee) => {
                return +employee.id != +employeeId
            });
            
            setEmployeeList(newEmployeeList)
        }, () => {
            alert("Deletion Failed")
        })
    }
    
    function addEmployee(inputEmployee) {
        Axios.post("http://localhost:4000/employees/", inputEmployee).then((response) => {
            alert("Employee Added")
        });
    }
    
    return (
        <>
            <h1>Length of Employee List: {employeeList.length}</h1><hr />
            <CreateEmployee addEmployee={addEmployee}></CreateEmployee><hr/>
            {employeeList.map((employee) => {
                return <EmployeeDetails deleteEmployee={deleteEmployee} employee={employee} addEmployee={addEmployee}></EmployeeDetails>
            })}
        </>
    )
}