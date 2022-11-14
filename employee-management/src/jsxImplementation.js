import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
    React.createElement("div", {}, [
        React.createElement("div", {}, [
            React.createElement("h1", {}, "Hello World"),
            React.createElement("h2", {}, "Hi"),
            React.createElement("div", {}, [
                React.createElement("h1", {}, "Hello World"),
                React.createElement("h2", {}, "Hi")
            ])
        ]),
        React.createElement("p", {},
            React.createElement("div", {}, [
                React.createElement("h1", {}, "Hello World"),
                React.createElement("h2", {}, "Hi")
            ])
        )
    ]),
document.getElementById("root"))