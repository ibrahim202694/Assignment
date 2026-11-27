function countPrimes(upperLimit) {
    let count = 0;

    for (let i = 2; i < upperLimit; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
}

console.log(countPrimes(10));
