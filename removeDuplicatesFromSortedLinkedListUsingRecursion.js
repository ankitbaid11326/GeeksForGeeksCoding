/*
Remove duplicates from a sorted linked list using recursion
    Write a removeDuplicates() function which takes a list sorted in non-decreasing 
    order and deletes any duplicate nodes from the list. 
    The list should only be traversed once.

    For example if the linked list is 
        11->11->11->21->43->43->60
    then removeDuplicates() should convert the list to 11->21->43->60.
*/

const { List } = require('./List');

List.prototype.removeDuplicateUsingRecursion = function(head = this.head){
    
    if(head == null){
        return null;
    }

    head.next = this.removeDuplicateUsingRecursion(head.next);

    if(head.next && head.next.data == head.data){
        return head.next;
    }

    return head;
}

const duplicateList = new List();
duplicateList.addToEnd(11);
duplicateList.addToEnd(11);
duplicateList.addToEnd(11);
duplicateList.addToEnd(21);
duplicateList.addToEnd(43);
duplicateList.addToEnd(43);
duplicateList.addToEnd(60);

const newList = duplicateList.removeDuplicateUsingRecursion(duplicateList.head);
console.log(JSON.stringify(newList, null, 2));
