// when integer is divisble by 3, fuinction returns fizz
// when integer is divisble by 5, fuinction returns buzz
// when integer is divisble by 3 & 5, fuinction returns fizzbuzz
// if none of above, function will return integer

const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzbuzz';
    }
    if (number % 3 === 0) {
        return 'fizz';
    };
    if (number % 5 === 0) {
        return 'buzz';
    };
    return number;
};

export default fizzBuzz;