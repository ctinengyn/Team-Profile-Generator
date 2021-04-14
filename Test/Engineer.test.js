const Engineer = require("../lib/Engineer");

test("Can set GitHub", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Nguyen", 123, "testy@test.com", testValue);
    expect(e.github).toBe(testValue);
});