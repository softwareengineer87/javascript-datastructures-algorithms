import { decimaToBinary } from "./decimalToBinary";
import { DrawElements } from "./DrawElements";
import { StackArray } from "./stack/StackArray";
import { StackObject } from "./stack/StackObject";

const stackArray = new StackObject();
stackArray.push(10);
stackArray.push(2);
stackArray.push(5);
console.log(stackArray.getItems());
// stackArray.pop();
console.log(stackArray.getItems());
console.log(`length of stack: ${stackArray.size()}`)
// stackArray.clear();
console.log(`last element of stack: ${stackArray.peek()}`)
console.log(`the stack is empty? ${stackArray.isEmpty()}`)
console.log(stackArray.getItems());
console.log(`length of stack: ${stackArray.size()}`)
console.log(stackArray.toString());

console.log(decimaToBinary(10));
console.log(decimaToBinary(100));

const draw = new DrawElements();
const canvas = document.getElementById('canvas');
canvas?.appendChild(draw.drawRect(10, 10, 100, 100));
/*
const names = ['Ana', 'pedro', 'john', 'nina', 'John'];
console.log(`original: ${names}`);
function compare(a: string, b: string) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}
console.log(`ordenado: ${names.sort(compare)}`);

const isNina = names.includes('Ligia');
if (isNina) {
  console.log('Nina foi localizada');
} else {
  console.log('Pessoa nao localizada');
}

let length: number = 5;
const int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i = 0; i < length; i++) {
  int16[i] = i + 1;
}

console.log(int16);
*/

