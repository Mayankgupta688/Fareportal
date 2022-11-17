import { useState, useEffect } from "react";

export default function CreateEmployee(props) {
    
    var [employee, setEmployee] = useState({
        name: "Mayank",
        id: "100",
        createdAt: "Today",
        avatar: "Not Available.."
    })
    
    function createNewEmployee() {
        props.addEmployee(employee)
    }
    
    function changeInputValue(event) {
        setEmployee({
            ...employee,
            [event.target.id]: event.target.value
        })
    }
    
    return (
        <>
            <label style={{ display: "inline-block", width: "250px" }}>Enter Name: </label><input id="name" onChange={changeInputValue} value={employee.name} type="text" /><br/><br/>
            <label style={{ display: "inline-block", width: "250px" }}>Enter Id: </label> <input id="id" onChange={changeInputValue} value={employee.id} type="text" /><br/><br/>
            <label style={{ display: "inline-block", width: "250px" }}>Enter CreatedAt: </label> <input id="createdAt" onChange={changeInputValue} value={employee.createdAt} type="text" /><br/><br/>
            <label style={{ display: "inline-block", width: "250px" }}>Enter Avatar: </label> <input onChange={changeInputValue} id="avatar" value={employee.avatar}  type="text" /><br /><br />
            <input type="button" value="Submit" onClick={createNewEmployee} />
        </>
    )
}