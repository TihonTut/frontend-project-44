import readlineSync from 'readline-sync';

function hello(description) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (description !== undefined) console.log(description);
  return name;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export { hello, getRandomInt };

