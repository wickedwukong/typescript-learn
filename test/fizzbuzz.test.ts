import {fizzbuzz} from '../src/fizzbuzz'

describe("fizzbuzz", () => {
    it("give 100 values", () => {
        expect(fizzbuzz().length).toEqual(100);
    });

    it("give 1 for 1st value", () => {
        expect(fizzbuzz()[0]).toEqual(1);
    });
});