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

test("Can set id", () => {
    const testValue = "123";
    const e = new Employee("Nguyen", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email", () => {
    const testValue = "testy@test.com";
    const e = new Employee("Nguyen", 123, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set name via getName()", () => {
    const testValue = "Christine";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can set name via getId()", () => {
    const testValue = 123;
    const e = new Employee("Nguyen", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can set name via getEmail()", () => {
    const testValue = "testy@test.com";
    const e = new Employee("Nguyen", 123, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole()", () => {
    const testValue = "Employee";
    const e = new Employee("Christine", 123, "testy@test.com");
    expect(e.getRole()).toBe(testValue);
});