function isHappy(number) {
    while (number !== 1 && number !== 4) {
        let sum = 0;

        while (number > 0) {
            let digit = number % 10;
            sum += digit * digit;
            number = (number - digit) / 10;
        }

        number = sum;
    }

    return number === 1;
}

console.log(isHappy(19));
console.log(isHappy(2));
