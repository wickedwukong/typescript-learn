import { sum } from "../src/foo";

test("basic", () => {
    expect(sum(1, 2)).toBe(3);
});

describe("The class under test", () => {
    it("should work", () => {
        expect(1).toBe(1);
    });
});
