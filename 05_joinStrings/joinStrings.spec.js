const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Frida', () => {
    expect(values.firstName).toEqual('Frida');
  });
  test('lastName is Vargas', () => {
    expect(values.lastName).toEqual('Vargas');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2017', () => {
    expect(values.birthYear).toEqual(2017);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Frida Vargas and I am 8 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Frida Vargas', () => {
    expect(values.fullName).toEqual('Frida Vargas');
  });
  test('age is 8', () => {
    expect(values.age).toEqual(8);
  });
});
