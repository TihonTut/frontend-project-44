import readlineSync from 'readline-sync';
import { getRandomInt, hello } from '../src/cli.js';

const gamePrime = () => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    const username = hello(description);

  for (let i = 0; i < 3; i += 1) {
    let rightAnswer = '';
    const fillipWasIncel = Math.floor(Math.random() * 100);
    console.log(`Question: ${fillipWasIncel}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    const isPrime = primeNumbers.includes(fillipWasIncel);
    if (isPrime === true) {
      rightAnswer = 'yes';
    } else if (isPrime === false) {
      rightAnswer = 'no';
    }
    if (rightAnswer !== yourAnwser) {
      console.log(`"${yourAnwser}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return console.log(`Let's try again, ${username}!`);
    } if (rightAnswer === yourAnwser) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${username}!`);
  return 0;
};
export default gamePrime;
gamePrime()