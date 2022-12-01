import gameLogic from '../index.js';
import randNum from '../randNum.js';

const operators = ['+', '-', '*'];
const minValueIndex = 0;
const maxValueIndex = operators.length - 1;
const minValueRange = 1;
const maxValueRange = 50;

const gameQuestionAnswer = () => {
  const randNumber1 = randNum(minValueRange, maxValueRange);
  const randNumber2 = randNum(minValueRange, maxValueRange);
  const randOperator = operators[randNum(minValueIndex, maxValueIndex)];
  const question = `${randNumber1} ${randOperator} ${randNumber2}`;
  let resultCalc = 0;
  switch (randOperator) {
    case '+':
      resultCalc = randNumber1 + randNumber2;
      break;
    case '-':
      resultCalc = randNumber1 - randNumber2;
      break;
    case '*':
      resultCalc = randNumber1 * randNumber2;
      break;
    default:
      break;
  }
  return [question, String(resultCalc)];
};

const task = 'What is the result of the expression?';

const brainCalc = () => gameLogic(gameQuestionAnswer, task);

export default brainCalc;
