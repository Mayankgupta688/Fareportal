import React from "react"

export default class EventsInReactClass extends React.Component {
    
    constructor() {
        super();
        this.employeeList = [
            { "id": "26", "createdAt": "2019-07-09T18:08:17.841Z", "name": "Lyric Metz", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tgerken/128.jpg" }, 
            { "id": "28", "createdAt": "2019-07-09T20:32:28.258Z", "name": "Efren Windler PhD", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mbilderbach/128.jpg" },
            { "id": "29", "createdAt": "2019-07-10T03:43:08.857Z", "name": "Kenya Reichel", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg" },
            { "id": "30", "createdAt": "2019-07-09T18:06:41.721Z", "name": "Edmund Fisher", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/seyedhossein1/128.jpg" }, 
            { "id": "31", "createdAt": "2019-07-09T11:44:07.092Z", "name": "Lenora Price", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/incubo82/128.jpg" },
            { "id": "32", "createdAt": "2019-07-09T20:56:58.884Z", "name": "Clementina Sanford", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thomasschrijer/128.jpg" }
        ]
        
        this.state = {
            employeeList: this.employeeList
        }
    }
    
    
    employeeClicked(event, empId) {
        this.employeeList = this.employeeList.filter((employee) => {
            return employee.id != empId;
        });
        
        this.setState({
            employeeList: this.employeeList
        })
    }
    
    render() {
        return (
            <div>
                <h1>Employee list is given below</h1><hr/>
                {this.state.employeeList.map((employee) => {
                    return (
                        <div>
                            <h2>Name is: {employee.name}</h2>
                            <input id={employee.id} type="button"
                                value={"Delete " + employee.name}
                                onClick={(event) => { this.employeeClicked(event, employee.id) }} />
                            <hr />
                        </div>
                )})}
            </div>
        )
    }
    
}