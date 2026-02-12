import { StackObject } from "./stack/StackObject";

function decimaToBinary(decNumber: number) {
  const remStack = new StackObject();
  let number = decNumber;
  let rem: number;
  let binaryString = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

export { decimaToBinary }
