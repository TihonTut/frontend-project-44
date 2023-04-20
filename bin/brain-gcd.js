import readlineSync from 'readline-sync';
import { getRandomInt, hello } from '../src/cli.js';

function nod(x, y) {
  if (y > x) {
    return nod(y, x);
  }
  if (!y) {
    return x;
  }
  return nod(y, x % y);
}

const gameNOD = () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    const username = hello(description);
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const rightAnswer = (nod(a, b));
    console.log(`Quetion: ${a} ${b}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (String(rightAnswer) !== yourAnwser) {
      i = 3;
      console.log(`'${yourAnwser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${username}!`);
    } if (String(rightAnswer) === yourAnwser) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${username}!`);
  return 0;
};

export default gameNOD;
gameNOD()