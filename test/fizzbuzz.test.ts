import {fizzbuzz} from '../src/fizzbuzz'

describe("fizzbuzz", () => {
    it("give 100 values", () => {
        expect(fizzbuzz().length).toEqual(100);
    });
});