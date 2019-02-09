const { Node, List } = require('./List');

function removeDuplicates(list) {
    let head = list, current = list;
    while (current && current.next) {
        console.log("current->Data", current.data);
        console.log("current->next->Data", current.data);
        if (current.data == current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

const list1 = new List();

list1.addToEnd(11);
list1.addToEnd(11);
list1.addToEnd(11);
list1.addToEnd(21);
list1.addToEnd(43);
list1.addToEnd(43);
list1.addToEnd(60);

const noDuplicates = removeDuplicates(list1.head);