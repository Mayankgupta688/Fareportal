import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import EmployeeDetails from "./employeeDetails";

export default class HomePageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: ""
        }
    }

    render() {
        return (
            <BrowserRouter>
                <>
                    <h1>This is the Application Header</h1>
                    <nav>
                        <a href="/home" style={{marginRight: "20px"}}>Home</a>
                        <a href="/help" style={{marginRight: "20px"}}>Help</a>
                        <a href="/about" style={{marginRight: "20px"}}>About</a>
                    </nav><br /><br />
                    <nav>
                        <Link style={{marginRight: "20px"}}  to="/home">Home</Link>
                        <Link style={{marginRight: "20px"}}  to="/help">Help</Link>
                        <Link  style={{marginRight: "20px"}} to="/about">About</Link>
                    </nav>
                
                    <div style={{ width: "100%", height: "400px", border: "1px solid red" }}>
                    
                        <Route exact path="/"     component={HomeComponent}></Route>
                        <Route exact path="/home" component={HomeComponent}></Route>
                        <Route exact path="/help" component={HelpComponent}></Route>
                        <Route exact path="/about" component={AboutComponent}></Route>
                        <Route exact path="/about" component={AboutComponent}></Route>
                        <Route path="/employee" component={EmployeeDetails}></Route>
                    
                    </div>
                
                    <h2>This is Application footer</h2>
                </>
            </BrowserRouter>
        )
    }
}


export function HomeComponent() {
    return <h1>This is Home Component</h1>
}

export function HelpComponent() {
    return <h1>This is Help Component</h1>
}

function AboutComponent() {
    return <h1>This is About Component</h1>
}