export function HelloComponent() {
    return <h1>Hello World</h1>
}

export function HelloComponent1() {
    return <h1>Hello World 1</h1>
}

export function HelloComponent2() {
    return <h1>Hello World 2</h1>
}

export function HelloComponent3() {
    return <h1>Hello World 3</h1>
}

var exportedData = {
    HelloComponent: HelloComponent,
    HelloComponent1: HelloComponent1,
    HelloComponent2: HelloComponent2,
    HelloComponent3: HelloComponent3
}

export default exportedData;
