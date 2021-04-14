const Intern = require("../lib/Intern");

test("Can set school", () => {
    const testValue = "UW";
    const e = new Intern("Nguyen", 123, "testy@test.com", testValue);
    expect(e.school).toBe(testValue);
});

