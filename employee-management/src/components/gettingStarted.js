export default function HelloComponent(props) {
    props.name = "adhsald";  // Failure
    props.employeeData.name = "Random Name"; // Non Failure
    return <h1>Hello {props.employeeData.name}, Id is: {props.employeeData.age}</h1>
}
