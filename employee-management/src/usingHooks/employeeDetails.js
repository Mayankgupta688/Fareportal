

export default function EmployeeDetails(props) {
    return (
        <>
            <h1>Employee Name: {props.employee.name}</h1>
            <h2>Employee Id: {props.employee.id}</h2>
            <h3>Employee Created At: {props.employee.createdAt}</h3>
            <input type="button" value="Delete" onClick={() => props.deleteEmployee(props.employee.id)} /><hr />
        </>
    )
}