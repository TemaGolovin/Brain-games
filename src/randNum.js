const max = 50; // max value for range
const min = 1; // min value for range
const randNum = () => Math.floor(Math.random() * (max - min + 1)) + min;

export default randNum;
