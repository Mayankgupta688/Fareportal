export default function HelloComponent(props) {
    props.employeeData.name = "Random Name"; // Non Failure
    props.arrayData.push(10);
    console.log("Copied: " + props.arrayData.length)
    console.log("Original: " + props.otherData.length)
    
    console.log(props.emp == props.employeeData)
    return <h1>Hello {props.employeeData.name}, Id is: {props.employeeData.age}</h1>
}
