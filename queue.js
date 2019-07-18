class Queue {
    constructor()
    {
        this.items= [];
    }

    // enqueue(item)
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue
    dequeue() {
        if(this.isEmpty())
        return "Underflow";
        return this.items.shift();
    }

    // returns front element of the queue
    front() {
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        var str = "";
        for(var i = 0;i< this.items.length;i++)
            str += this.items[i] + " ";
        return str;
    }
}

var q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

console.log(q.printQueue());

q.dequeue();
console.log(q.printQueue());
