import {fizzbuzz} from '../src/fizzbuzz'

describe("fizzbuzz", () => {
    it("give 100 values", () => {
        expect(fizzbuzz().length).toEqual(100);
    });

    it("give 1 for 1st value, and 2 for 2nd value", () => {
        expect(fizzbuzz()[0]).toEqual(1);
        expect(fizzbuzz()[1]).toEqual(2);
    });

    it("give Fizz for 3rd value", () => {
        expect(fizzbuzz()[2]).toEqual('Fizz');
    });

    it("give Buzz for 5th value", () => {
        expect(fizzbuzz()[4]).toEqual('Buzz');
    });
});