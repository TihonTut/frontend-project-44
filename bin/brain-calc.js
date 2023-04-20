import readlineSync from 'readline-sync';
import { getRandomInt, hello } from '../src/cli.js';

const operation = (x, y, number) => {
  let result = 0;
  if (number === 0) {
    result = x + y;
  } else if (number === 1) {
    result = x - y;
  } else if (number === 2) {
    result = x * y;
  }
  return result;
};

const gameCalc = () => {
  const operands = ['+', '-', '*'];
  const numbers = [0, 1, 2];
  const description = 'What is the result of the expression?';
  const username = hello(description);
  for (let rounds = 0; rounds < 3; rounds += 1) {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const rightAnswer = (operation(a, b, randomNumber));
    console.log(`Quetion: ${a} ${operands[randomNumber]} ${b}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) !== yourAnswer) {
      rounds = 3;
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${username}`);
    } if (String(rightAnswer) === yourAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${username}!`);
}

gameCalc();
// const description = 'What is the result of the expression?';
// const username = hello(description);

// for (let rounds = 0; rounds < 3; rounds += 1) {
//   const randomNumber = getRandomInt(100);
//   const operands = ['+','-','*'];
//   const i = Math.floor(Math.random()*arr.length);
//   const randomOperand = operands[i];
//   console.log(`Question: ${randomNumber} ${i} ${randomNumber}`);
//   const userAnswer = readlineSync.question('Your answer:\n');
  
//   if (correctAnswer === userAnswer) {
//      console.log('Correct!'); 
//   } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
//   console.log(`Let's try again, ${username}`);
//   }
// }