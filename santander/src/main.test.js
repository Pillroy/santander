import fizzBuzz from "./main";

test('fizz should be returned when number is divisible by 3', () => {
    const number = 9;
    expect(fizzBuzz(number)).toEqual('fizz');
});

test('buzz should be returned when number is divisible by 5', () => {
    const number = 10;
    expect(fizzBuzz(number)).toEqual('buzz');
});

test('fizzbuzz should be returned when number is divisible by 3 and 5', () => {
  const number = 15;
  expect(fizzBuzz(number)).toEqual('fizzbuzz');
});

test('number should be returned when number is not divisible by 3 or 5', () => {
  const number = 19;
  expect(fizzBuzz(number)).toEqual(number);
});

test('number should be returned when number is not divisible by 3 or 5', () => {
  const number = -7;
  expect(fizzBuzz(number)).toEqual(number);
});

test('number should be returned when number is not divisible by 3 or 5', () => {
  const number = 0;
  expect(fizzBuzz(number)).toEqual(number);
});

// test('number should be returned when number is not divisible by 3 or 5', () => {
//   const number = Infinity;
//   expect(fizzBuzz(number)).toEqual(number);
// });


