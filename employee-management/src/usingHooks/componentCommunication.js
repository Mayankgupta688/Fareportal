import React, { useState } from "react";

export default function ParentComponent() {

    var [interval, setInterval] = useState(0);
    
    function resetIntervalData() {
        setInterval(0)
    }
    
    function incrementIntervalData() {
        setInterval((interval) => {
            return interval + 1
        })
    }
    
    return (
        <div>
            <h1>The counter in Parent is {interval}</h1>
            <input type="button" value="Increment Interval" onClick={incrementIntervalData} /><br />
            <ChildComponent interval={interval} resetIntervalData={resetIntervalData}></ChildComponent>
        </div>
    )
}

function ChildComponent(props) {
    return (
        <div>
            <h1>The counter in Parent is {props.interval}</h1>
            <input type="button" value="Reset Interval" onClick={props.resetIntervalData} />
        </div>
    )
}