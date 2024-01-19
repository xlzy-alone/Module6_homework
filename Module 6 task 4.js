function printNumbers(start, end) {
    let current = start;
    const interval = setInterval(function() {
        if (current <= end) {
            console.log(current);
            current++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

printNumbers(5, 15);
