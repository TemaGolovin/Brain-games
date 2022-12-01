import gameLogic from '../index.js';
import randNum from '../randNum.js';

const minValueRange = 1;
const maxValueRange = 50;

const greatestCommonDivisor = (num1, num2) => {
  let x = num1;
  let y = num2;
  if (x > y) {
    while (y !== 0) {
      const intNum = y;
      y = x % y;
      x = intNum;
    }
    return x;
  }
  if (y > x) {
    while (x !== 0) {
      const intNum = x;
      x = y % x;
      y = intNum;
    }
    return y;
  }
  return x;
};

const gameQuestionAnswer = () => {
  const randNumber1 = randNum(minValueRange, maxValueRange);
  const randNumber2 = randNum(minValueRange, maxValueRange);
  const question = `${randNumber1} ${randNumber2}`;
  const answer = greatestCommonDivisor(randNumber1, randNumber2);
  return [question, String(answer)];
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => gameLogic(gameQuestionAnswer, task);

export default brainGcd;
