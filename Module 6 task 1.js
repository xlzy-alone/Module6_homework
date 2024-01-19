function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(function(element) {
        if (typeof element === 'number' && !isNaN(element)) {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log('Чётных элементов: ' + evenCount);
    console.log('Нечётных элементов: ' + oddCount);
    console.log('Нулевых элементов: ' + zeroCount);
}

let array = [1, 2, 3, 0, 'a', null, 4, 5, 6];
countEvenOddZero(array);
