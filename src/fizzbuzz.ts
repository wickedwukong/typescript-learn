export const fizzbuzz
    = (): any[] => {
    return [...Array(100).keys()]
        .map(i => i + 1)
        .map(i => {
            return (i % 3 == 0) ? 'Fizz' : (i % 5 == 0) ? 'Buzz' : i;
        });
};
