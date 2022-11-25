#!/usr/bin/env node

import readlineSync from 'readline-sync/lib/readline-sync.js';
import yourName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const gameName = yourName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const max = 50; // max value for range
const min = 1; // min value for range

for (let i = 0; i <= 2; i += 1) {
  const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Question: ${randNumber}`);
  const evenAnswer = readlineSync.question('Your answer: ');
  if (randNumber % 2 === 0) {
    if (evenAnswer === 'yes') {
      console.log('Corrent!');
      if (i === 2) {
        console.log(`Congratulations, ${gameName}`);
      }
    } else {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${gameName}!`);
      break;
    }
  } else if (evenAnswer === 'no') {
    console.log('Corrent!');
    if (i === 2) {
      console.log(`Congratulations, ${gameName}`);
    }
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${gameName}!`);
    break;
  }
}
