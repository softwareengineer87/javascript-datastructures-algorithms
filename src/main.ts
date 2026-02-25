import { decimaToBinary } from "./decimalToBinary";
import { DrawElements } from "./DrawElements";
import { hotPotato } from "./hotPotato";
import { LinkedList } from "./LinkedList/LinkedList";
import { palimdrome } from "./palimdrome";
import { Deque } from "./queue/Deque";
import { Queue } from "./queue/Queue";
import { StackArray } from "./stack/StackArray";
import { StackObject } from "./stack/StackObject";


const linkeList = new LinkedList();
linkeList.push(10);
linkeList.push(45);
linkeList.push(20);
linkeList.push(5);
console.log(linkeList);

/*
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(5);
console.log(`Deleted element: ${queue.dequeue()}`)
console.log(`first element: ${queue.peek()}`);
// queue.clear();
console.log(`is empty? ${queue.isEmpty()}`);
console.log(`What the size queue? ${queue.size()}`)
console.log(`queue items: ${queue.getItems()}`)
console.log(queue.toString());

const deque = new Deque();
console.log(`is empty? ${deque.isEmpty()}`);
deque.addBack(12);
deque.addBack(230);
deque.addFront(20);
//console.log(`removed back: ${deque.removeBack()}`);
console.log(`removed front: ${deque.removeFront()}`);
// console.log(`removed front: ${deque.removeFront()}`);
deque.addFront(155);
console.log(`size of deque: ${deque.size()}`);
console.log(`data of deque: ${deque.toString()}`)
console.log(`first element: ${deque.peekFront()}`);
console.log(`last element: ${deque.peekBack()}`);
console.log(deque.getItems());

const gamers = ['Aninha', 'Lisa', 'Beto', 'Julia'];
const { eliminated, winner } = hotPotato(gamers, 10);
eliminated.forEach((name) => {
  console.log(`${name} as eliminated of hot potato game`);
});
console.log(`winner ${winner}`);

const phrase = 'datastructure and algorithm';
const diferent = palimdrome(phrase);
if (diferent) {
  console.log(`a string ${phrase} eh palimdroma.`);
} else {
  console.log(`a string ${phrase} nao eh palimdroma.`);
}
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

console.log(decimaToBinary(10, 2));
console.log(decimaToBinary(100, 5));
console.log(decimaToBinary(500, 7));


const draw = new DrawElements();
draw.drawRect(0, 0, 100, 100);
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

