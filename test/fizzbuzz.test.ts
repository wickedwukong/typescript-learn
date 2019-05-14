import {fizzbuzz} from '../src/fizzbuzz'

describe("fizzbuzz", () => {
    it("give 100 values", () => {
        expect(fizzbuzz().length).toEqual(100);
    });

    it("give 1 for 1st value, and 2 for 2nd value", () => {
        expect(fizzbuzz()[0]).toEqual(1);
        expect(fizzbuzz()[1]).toEqual(2);
    });

    it("give Fizz for 3rd and 99th value", () => {
        expect(fizzbuzz()[2]).toEqual('Fizz');
        expect(fizzbuzz()[98]).toEqual('Fizz');
    });

    it("give Buzz for 5th value and 100th value", () => {
        expect(fizzbuzz()[4]).toEqual('Buzz');
        expect(fizzbuzz()[99]).toEqual('Buzz');
    });

    it("give FizzBuzz for 15th and 90th value", () => {
        expect(fizzbuzz()[14]).toEqual('FizzBuzz');
        expect(fizzbuzz()[89]).toEqual('FizzBuzz');
    });
});