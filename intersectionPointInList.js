class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
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
    this.length++;
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
    this.length++;
  };

  printList = () => {
    console.log(JSON.stringify(this.head, null, 2));
  };

  getLength = () => {
    return this.length;
  };

  static intersectionPointValue(list1, list2) {
    let biggerList = null,
      anotherList = null;
    let diff = Math.abs(list1.getLength() - list2.getLength());

    if (list1.getLength() > list2.getLength()) {
      biggerList = list1.head;
      anotherList = list2.head;
    } else {
      biggerList = list2.head;
      anotherList = list1.head;
    }

    for (let i = 0; i < diff; i++) {
      biggerList = biggerList.next;
    }

    while (anotherList.data !== biggerList.data && anotherList && biggerList) {
      anotherList = anotherList.next;
      biggerList = biggerList.next;
    }

    return anotherList.data;
  }
}

const list1 = new List();
list1.addInBeginning(16);
list1.addInBeginning(15);
list1.addInBeginning(14);
list1.addInBeginning(13);
list1.addInBeginning(12);
list1.addInBeginning(11);
list1.addInBeginning(10);
list1.addInBeginning(9);

const list2 = new List();
list2.addInBeginning(20);
list2.addInBeginning(19);
list2.addInBeginning(18);
list2.addInBeginning(17);

const list3 = new List();
list3.addInBeginning(33);
list3.addInBeginning(32);
list3.addInBeginning(31);

/*
ALL THREE LIST AFTER MERGING WITH LIST 3
List1 = 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 -> 16 -> 31 -> 32 -> 33 -> null;
List2 = 17 -> 18 -> 19 -> 20 -> 31 -> 32 -> 33 -> null
List3 = 31 -> 32 -> 33
*/

list1.tail.next = list3.head;
list1.tail = list3.tail;

list2.tail.next = list3.head;
list2.tail = list3.tail;

const interSectionPoint = List.intersectionPointValue(list1, list2);
console.log(interSectionPoint);
