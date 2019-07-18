class Stack {
    constructor()
    {
        this.items = [];
    }

    // Push
    push(element) {
        this.items.push(element);
    }

    // Pop
    pop() {
        if(this.items.length == 0)
        return "Underflow";
        return this.items.pop();
    }

    // Peek
    peek() {
        return this.items[this.items.length-1];
    }

    // isEmpty
    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        var str = "";
        for(let i =0; i< this.items.length;i++) 
            str += this.items[i] + " ";
            return str;
        
    }
}

var stack = new Stack();

stack.push(3);
stack.push(6);
stack.push(9);
stack.push(12);
console.log(stack.printStack());