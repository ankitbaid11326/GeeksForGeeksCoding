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

  reverseListInKOrder = (list, k) => {
    let temp = list,
      head = list;
    let next = null,
      prev = null,
      ans = null;
    for (let i = 0; i < k && temp; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    if (!ans) {
      ans = prev;
    }

    if (next) {
      head.next = this.reverseListInKOrder(next, k);
    }
    return ans;
  };
}

/*
10, 20, 30, 40, 50, 60 and K = 3
30, 20, 10, 60, 50, 40

*/

const list1 = new List();
list1.addInBeginning(40);
list1.addInBeginning(30);
list1.addInBeginning(20);
list1.addInBeginning(10);
list1.addToEnd(50);
list1.addToEnd(60);
list1.addToEnd(70);
list1.addToEnd(80);
const data = list1.reverseListInKOrder(list1.head, 5);
console.log(JSON.stringify(data, null, 2));
