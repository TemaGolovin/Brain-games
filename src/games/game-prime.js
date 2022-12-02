import gameLogic from '../index.js';
import randNum from '../randNum.js';

const minValueRange = 1;
const maxValueRange = 50;

const gameQuestionAnswer = () => {
  const randNumber = randNum(minValueRange, maxValueRange);
  let answer = 'yes';
  for (let i = 2; i <= randNumber / 2; i += 1) {
    if (randNumber % i === 0) {
      answer = 'no';
      break;
    } else {
      answer = 'yes';
    }
  }
  return [randNumber, answer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => gameLogic(gameQuestionAnswer, task);

export default brainPrime;
