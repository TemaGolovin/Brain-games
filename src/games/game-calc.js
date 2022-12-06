import gameLogic from '../index.js';
import randNum from '../helper.js';

const description = 'What is the result of the expression?';

const colculate = (operator, operandOne, operandTwo) => {
  let resultCalc = 0;
  switch (operator) {
    case '+':
      resultCalc = operandOne + operandTwo;
      break;
    case '-':
      resultCalc = operandOne - operandTwo;
      break;
    case '*':
      resultCalc = operandOne * operandTwo;
      break;
    default:
      break;
  }
  return resultCalc;
};

const gameQuestionAnswer = () => {
  const operators = ['+', '-', '*'];
  const randNumber1 = randNum(1, 50);
  const randNumber2 = randNum(1, 50);
  const randOperator = operators[randNum(0, operators.length - 1)];
  const question = `${randNumber1} ${randOperator} ${randNumber2}`;
  const resultCalc = colculate(randOperator, randNumber1, randNumber2);
  return [question, String(resultCalc)];
};

const brainCalc = () => gameLogic(gameQuestionAnswer, description);

export default brainCalc;
