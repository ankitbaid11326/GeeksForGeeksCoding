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
}

module.exports = {
    List,
    Node
};