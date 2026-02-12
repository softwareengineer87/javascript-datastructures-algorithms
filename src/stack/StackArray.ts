class StackArray {

  itens: any[];

  constructor() {
    this.itens = [];
  }

  push(element: any) {
    this.itens.push(element);
  }

  pop() {
    this.itens.pop();
  }

  peek() {
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    if (this.itens.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.itens = [];
  }

  size() {
    return this.itens.length;
  }

}

export { StackArray }
