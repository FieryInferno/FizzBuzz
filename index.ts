import * as readline from 'readline';

class FizzBuzz {

  number: number;
  result: string[]  = [];

  constructor(number: number) {
    this.number = number;
  }

  replaceNumber(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number.toString();
    }
  }

  fizzBuzz(): string[] {
    for (let index = 0; index <= this.number; index++) {
      this.result.push(this.replaceNumber(index));
    }

    return this.result;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukan angka: ', (answer) => {
  const fizzBuzz  = new FizzBuzz(parseInt(answer));
  const result    = fizzBuzz.fizzBuzz();
  
  result.forEach(res => {
    console.log(res);
  });

  rl.close();
});
