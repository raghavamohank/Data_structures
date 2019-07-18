// class Node {
//     constructor(data,next = null,prev = null) {
//         this.data = data;
//         this.next = next;
//         this.prev = prev;
//     }
// }

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let list = new DoublyLinkedList;
console.log(list);