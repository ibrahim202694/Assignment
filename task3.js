function climbStairs(totalSteps) {
    if (totalSteps <= 1) {
        return 1;
    }
    let first = 1;
    let second = 1;
    for (let i = 2; i <= totalSteps; i++) {
        let current = first + second;
        first = second;
        second = current;
    }

    return second;
}

console.log(climbStairs(5));
