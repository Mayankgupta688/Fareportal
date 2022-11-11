// Constructor Function

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

var emp = new Employee("TechnoFunnel", 20);
console.log(emp.name);


class EmployeeClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var employeedata = new EmployeeClass("TechnoFunnel", 20);


class Emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sampleFunction = function () {
            console.log("Hello");
        }
    }

    getData() {
        return (this.name + " - " + this.age);
    }
}