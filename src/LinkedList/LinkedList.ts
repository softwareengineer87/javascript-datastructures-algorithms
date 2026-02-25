import { Node } from "./Node";

class LinkedList {

  private count: number;
  private head: any;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(element: any) {
    const node = new Node(element);
    let current;
    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

}

export { LinkedList }

