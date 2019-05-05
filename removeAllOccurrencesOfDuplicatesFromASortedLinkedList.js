// Remove all occurrences of duplicates from a sorted Linked List

/* 
Remove all occurrences of duplicates from a sorted Linked List
Given a sorted linked list, delete all nodes that have duplicate numbers (all occurrences), leaving only numbers that appear once in the original list.

    Examples:

        Input : 23->28->28->35->49->49->53->53
        Output : 23->35

        Input : 11->11->11->11->75->75
        Output : empty List

Note that this is different from Remove Duplicates From Linked List
*/

const { List } = require('./List');

List.prototype.removeAllOccurrences = function () {
    let temp = this.head;
    let newList = new List();
    let prev = null;
    let counter = 0;
    while (temp != null && temp.next) {

        if (prev) {
            if (temp.data != prev.data && temp.data != temp.next.data) {
                counter++;
                newList.addToEnd(temp.data);
            }
        }
        else{
            if(temp.data != temp.next.data){
                counter++;
                newList.addToEnd(temp.data);
            }
        }
        prev = temp;
        temp = temp.next;
    }

    if (counter) {
        return newList;
    } else {
        return "empty List";
    }
}

const list1 = new List();
list1.addToEnd(23);
list1.addToEnd(28);
list1.addToEnd(28);
list1.addToEnd(35);
list1.addToEnd(49);
list1.addToEnd(49);
list1.addToEnd(53);
list1.addToEnd(53);


console.log(JSON.stringify(list1.removeAllOccurrences(), null, 2));


const list2 = new List();
list2.addToEnd(11);
list2.addToEnd(11);
list2.addToEnd(11);
list2.addToEnd(11);
list2.addToEnd(75);
list2.addToEnd(75);

console.log(JSON.stringify(list2.removeAllOccurrences(), null, 2));


