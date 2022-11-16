import React from "react";

export default function TimerComponent() {
    
    function getTime() {
        return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`  
    }
    
    var currentTime = getTime();
    
    setInterval(() => {
        debugger;
        currentTime = getTime();
    }, 1000)
    
    return <h1>Time {currentTime}</h1>
}