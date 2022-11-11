class Employee {
    constructor() {
        this.qqqname = "Mayank";
        this.age = 10;
    }

    getName() {
        console.log(this);
        setTimeout(function () {
            console.log(this.qqqname);
            console.log(this)
        }, 1000);
    }
}

var myEmployee = new Employee();
myEmployee.getName();