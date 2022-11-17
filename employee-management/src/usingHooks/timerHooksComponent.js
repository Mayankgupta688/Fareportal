import React, { useState, useEffect } from "react";

export default function TimerHooksComponent(props) {
    
    var [intervalValue, setIntervalValue] = useState(1000);
    var [employee, setEmployee] = useState( });
    
    useEffect(() => {
        setInterval(() => {
            setIntervalValue((intervalValue) => {
                return intervalValue + 1
            });
        }, 1000)
    }, []);
    
    useEffect(() => {
        console.log("Component Updated")
    });
    
    useEffect(() => {
        console.log("employee Updated Again")
    }, [employee]);
    
    useEffect(() => {
        console.log("intervalValue Updated Again")
    }, [intervalValue]);
    
    
    function incrementCounter() {
        setEmployee({
            ...employee,
            name: "TechnoFunnel"
        })
    }
    
    return (
        <div>
            <h1>Hello {props.employee.name}: {intervalValue} {employee.name}</h1>
            <input type="button" value="Increment Counter" onClick={incrementCounter} />
        </div>
    )
}