import {Greeter} from '../src/Greeter'

describe("Greeter", () => {
    it("greeting with a message", () => {
        expect(new Greeter("hello")).toEqual({"greeting": "hello"});
    });
});