function hello() {
    console.log(a)

    function sample() {
        var b = 10
        console.log(a)
    }
    sample();
    if (true) {
        let a = 10;
    }
}

hello();