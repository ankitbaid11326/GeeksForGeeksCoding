class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addInBeginning = data => {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  reverseList = list => {
    let current = list,
      prev = null,
      next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  };

  addToEnd = data => {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  printList = () => {
    console.log(JSON.stringify(this.head, null, 2));
  };

  checkPalindrome = () => {
    let current = this.head,
      fastCurrent = this.head,
      list1 = this.head;

    while (current && fastCurrent && fastCurrent.next) {
      current = current.next;
      fastCurrent = fastCurrent.next.next;
    }

    let list2 = this.reverseList(current);

    let isPalin = true;
    while (list2 !== null) {
      if (list2.data !== list1.data) {
        isPalin = false;
      }
      list2 = list2.next;
      list1 = list1.next;
    }

    return isPalin;
  };
}

const list1 = new List();
list1.addInBeginning('p');
list1.addInBeginning('a');
list1.addInBeginning('m');
list1.addInBeginning('m');
list1.addInBeginning('a');
list1.addInBeginning('p');

console.log(list1.checkPalindrome());
