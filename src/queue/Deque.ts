
class Deque {

  private count: number;
  private lowestCount: number;
  private items: {};

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  isEmpty() {
    return (this.count - this.lowestCount) === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    console.log(this.count);
    if (this.isEmpty()) {
      return '';
    }
    let ojbString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      ojbString = `${ojbString},${this.items[i]}`;
    }
    return ojbString;
  }

  addFront(elemnt: any) {
    if (this.isEmpty()) {
      this.addBack(elemnt);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = elemnt;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = elemnt;
  }

  addBack(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  getItems() {
    return this.items;
  }

}

export { Deque }

