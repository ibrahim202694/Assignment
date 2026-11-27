function isPalindromeNumber(number) {
    if (number < 0) {
        return false;
    }

    let original = number;
    let reversed = 0;

    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }

    return original === reversed;
}
    console.log(reverseInteger(-123));
