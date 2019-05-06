/* 
Remove duplicates from a sorted doubly linked list
Given a sorted doubly linked list containing n nodes. The problem is to remove duplicate nodes from the given list.

Examples:
    Input : 4 <-> 4 <-> 4 <-> 4 <-> 6 <-> 8 <-> 8 <-> 10 <-> 12 <-> 12
    Output: 4 <-> 6 <-> 8 <-> 10 <-> 12
*/

const { DoubleList } = require('./DoubleLinkedList')

DoubleList.prototype.removeDuplicateFromSortedList = function () {
    let temp = this.head;
    while (temp != null) {
        if(temp.next && temp.data == temp.next.data){
            let value = temp.next.next;
            if(value){
                value.prev = temp;
            }
            temp.next = value;
        }else{
            temp = temp.next;
        }
    }
}

const list1 = new DoubleList();
list1.addDataToEnd(4);
list1.addDataToEnd(4);
list1.addDataToEnd(4);
list1.addDataToEnd(4);
list1.addDataToEnd(6);
list1.addDataToEnd(8);
list1.addDataToEnd(8);
list1.addDataToEnd(10);
list1.addDataToEnd(12);
list1.addDataToEnd(12);

list1.removeDuplicateFromSortedList();
list1.printList();