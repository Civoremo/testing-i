const enhancer = require("./enhancer.js");

describe("SUCCESS", () => {
    test("success", () => {
        expect(enhancer.success({ name: "sword" })).toEqual({ name: "sword" });
    });
});

describe("FAIL", () => {
    test("failed enhancement", () => {
        expect(enhancer.fail({ name: "sword" })).toEqual({ name: "bow" });
    });
});

describe("REPAIR", () => {
    expect(enhancer.repair({ durability: 50 })).toEqual({ durability: 100 });
});
