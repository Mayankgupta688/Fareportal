import ReactDOM from "react-dom";
import AppComponent from "./usingHooks/timerHooksComponent";

var employee = {
    name: "Mayank",
    age: 10,
    designation: "Developer"
}

ReactDOM.render((
    <div>
        <AppComponent name="Mayank" initialCount="1000" employee={employee}></AppComponent><hr />
    </div>
), document.getElementById("root"));

