function isPrimeNumber(num) {
    if (num > 1000) {
        console.log("Данные неверны");
    } else if (num < 2) {
        console.log(num + " не является простым числом");
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " является простым числом");
        } else {
            console.log(num + " не является простым числом");
        }
    }
}

let number = parseInt(prompt("Введите число:"));
isPrimeNumber(number);
