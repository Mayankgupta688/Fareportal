import ReactDOM from "react-dom";
import AppComponent from "./components/gettingStarted";

var name = "Mayank";

var emp = {
    name: "Mayank",
    age: 10
}

var arrayData = [1, 2, 3, 4];

console.log(arrayData)

var arrayDataCloned = [...arrayData];

console.log(arrayData == arrayDataCloned)

ReactDOM.render((
    <div>
        <AppComponent name={name} emp={emp} employeeData={{ ...emp }} arrayData={[...arrayData]} otherData={arrayData}></AppComponent><hr />
    </div>
), document.getElementById("root"));

