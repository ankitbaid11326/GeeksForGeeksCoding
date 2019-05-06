class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addDataToEnd = (data) => {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    addDataToBeginning = (data) => {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    printList = () => {
        let temp = this.head;
        let outputStr = "";
        while (temp != null) {
            outputStr += `${temp.data} `;
            temp = temp.next;
        }

        console.log(outputStr);
    }
}

module.exports = {
    DoubleList
}