import readlineSync from 'readline-sync';
import { getRandomInt, hello } from '../src/cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const username = hello(description);

for (let rounds = 0; rounds < 3; rounds += 1) {
  const randomNumber = getRandomInt(100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer:\n');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${username}`);
    break;
  }
}
