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

    addNode = (data) => {
        const newNode = new Node(data);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    ifLoopExist = () => {
        let temp = this.head;
        let doublePointer = this.head;

        while (temp && doublePointer && doublePointer.next && doublePointer.next.next) {
            temp = temp.next;
            doublePointer = doublePointer.next.next;

            if (temp == doublePointer) {
                return temp;
            }
        }
        return false;
    }

    nodeStartLoop = () => {
        let value = this.ifLoopExist();
        if (value) {
            let temp = this.head;
            while(temp.data != value.data){
                temp = temp.next;
                value = value.next;
            }
            console.log("value", value);
        }
    }
}

const list1 = new List();
list1.addNode(10);
// list1.addNode(20);

const node20 = new Node(20);
list1.tail.next = node20;
list1.tail = node20;

list1.addNode(30);
list1.addNode(40);
list1.addNode(50);
list1.addNode(60);
list1.addNode(70);
list1.addNode(80);

// Making a loop from node 80 to node 20
list1.tail.next = node20;
list1.tail = node20;

console.log("Loop ? ", list1.nodeStartLoop());

// console.log(JSON.stringify(list1, null, 2));