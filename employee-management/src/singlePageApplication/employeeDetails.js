import { useState, useEffect } from "react";
import { HelpComponent, HomeComponent } from "./homePageComponent";
import { Route } from 'react-router-dom';
import Axios from "axios";

export default function EmployeeDetails(props) {
    
    var [emp, setEmp] = useState({
        name: "",
        id: 0
    })
    
    useEffect(() => {
        alert(props.match.params.empId);
        
        
        Axios.get("http://localhost:4000/employees/" + props.match.params.empId).then((response) => {
            setEmp(response.data);
        })
    }, [])
    
    function redirectUser() {
        props.history.push("/home");
    }
    
    debugger;
    return (
        <>
            <h1>Employee Name: {emp.name}</h1>
            <h2>Employee Id: {emp.id}</h2>
            <input type="button" value="Redirect" onClick={redirectUser} /><hr />
            
            <Route exact path="/employee/help" component={HelpComponent}></Route>
            <Route path="/employee/home" component={HomeComponent}></Route>
            
        </>
    )
}