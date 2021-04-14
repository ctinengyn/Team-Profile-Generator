const Engineer = require("../lib/Engineer");

test("Can set GitHub", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Nguyen", 123, "testy@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole()", () => {
    const testValue = "Engineer";
    const e = new Engineer("Nguyen", 123, "testy@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Nguyen", 123, "testy@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});