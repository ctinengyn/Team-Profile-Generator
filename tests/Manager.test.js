const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number", () => {
    const testValue = 1;
    const e = new Manager("Nguyen", 123, "testy@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole()", () => {
    const testValue = "Manager";
    const e = new Manager("Nguyen", 123, "testy@test.com", 1);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 1;
    const e = new Manager("Nguyen", 123, "testy@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});