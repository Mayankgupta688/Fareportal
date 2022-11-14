import ReactDOM from "react-dom";
import AppComponent from "./components/gettingStarted";

var name = "Anshul Gupta";

var employee = {
    name: "Anshul",
    id: 10,
    createdAt: "Today",
    avatar: "https://img.freepik.com/free-photo/young-entrepreneurs-discussing-something-with-smile-during-conference-indoor-portrait-international-employees-sitting-office-with-laptops-talking-about-work_197531-3712.jpg?w=2000"
}

var arrayData = [10, 20, 30, 40];


ReactDOM.render((
    <div>
        <AppComponent otherData="Sample data Array or Object" randomData={arrayData} employeeData={employeeData} name={employeeData.name} age={employeeData.age}></AppComponent><hr/>
    </div>
), document.getElementById("root"))

// 1. 

