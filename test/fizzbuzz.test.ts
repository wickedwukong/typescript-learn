import {fizzBuzz} from "../src/fizzBuzz";

describe("fizzBuzz", () => {
    it("give 100 values", () => {
        expect(fizzBuzz().length).toEqual(100);
    });

    it("give 1 for 1st value, and 2 for 2nd value", () => {
        expect(fizzBuzz()[0]).toEqual(1);
        expect(fizzBuzz()[1]).toEqual(2);
    });

    it("give Fizz for 3rd and 99th value", () => {
        expect(fizzBuzz()[2]).toEqual("Fizz");
        expect(fizzBuzz()[98]).toEqual("Fizz");
    });

    it("give Buzz for 5th value and 100th value", () => {
        expect(fizzBuzz()[4]).toEqual("Buzz");
        expect(fizzBuzz()[99]).toEqual("Buzz");
    });

    it("give FizzBuzz for 15th and 90th value", () => {
        expect(fizzBuzz()[14]).toEqual("FizzBuzz");
        expect(fizzBuzz()[89]).toEqual("FizzBuzz");
    });
});
