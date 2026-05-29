const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Meshack", () => {
    expect(values.firstName).toEqual("Meshack");
  });
  test("lastName is Magara", () => {
    expect(values.lastName).toEqual("Magara");
  });
  test("thisYear is 2026", () => {
    expect(values.thisYear).toEqual(2026);
  });
  test("birthYear is 2006", () => {
    expect(values.birthYear).toEqual(2006);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Meshack Magara and I am 20 years old.",
    );
  });
});

describe("step 3", () => {
  test("fullName is Meshack Magara", () => {
    expect(values.fullName).toEqual("Meshack Magara");
  });
  test("age is 20", () => {
    expect(values.age).toEqual(20);
  });
});
