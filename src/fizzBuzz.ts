export const fizzBuzz = (): Array<string | number> =>
    number1To100().map((i) => transformToFizzBuzz(i));

function number1To100(): number[] {
    const number0To99 = () => [...Array(100).keys()];

    return number0To99().map((i) => i + 1);
}

function transformToFizzBuzz(i: number): string | number {
    return (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" : (i % 3 === 0) ? "Fizz" : (i % 5 === 0) ? "Buzz" : i;
}
