const Intern = require("../lib/Intern");

test("Can set school", () => {
    const testValue = "UW";
    const e = new Intern("Nguyen", 123, "testy@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole()", () => {
    const testValue = "Intern";
    const e = new Intern("Nguyen", 123, "testy@test.com", "UW");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UW";
    const e = new Intern("Nguyen", 123, "testy@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});