const Employee = require("../lib/Employee");

test("Can set Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
    const name = "Christine";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});