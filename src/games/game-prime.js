import gameLogic from '../index.js';
import randNum from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameQuestionAnswer = () => {
  const question = randNum(1, 50);
  const answer = isPrimeNum(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => gameLogic(gameQuestionAnswer, description);

export default brainPrime;
