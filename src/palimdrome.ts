import { Deque } from "./queue/Deque";

function palimdrome(str: string) {
  const deque = new Deque();
  const replacedStr = str.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar;
  let lastChar;
  for (let i = 0; i < replacedStr.length; i++) {
    deque.addBack(replacedStr[i]);
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

export { palimdrome }

