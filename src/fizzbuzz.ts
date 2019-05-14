function transformToFizzBuzz(i: number) {
    return (i % 3 == 0) ? 'Fizz' : (i % 5 == 0) ? 'Buzz' : i;
}

export const fizzbuzz = (): any[] =>
    number1To100().map(i => transformToFizzBuzz(i));

function number1To100() {
    return [...Array(100).keys()]
        .map(i => i + 1);
}
