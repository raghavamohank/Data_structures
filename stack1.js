class Stack extends Array {
    constructor(...elems) {
        super(...elems)
    }

    pop() {
        if(this.length === 0)   throw new Error('Nothing to pop!')
        super.pop()
    }

    peek() {
        if(this.length === 0) throw new Error('Stack is empty');
        return this[this.length -1];
    }

    size() {
        return this.length
    }
}

const string1 = "[[{([[({})]])}]]"
const string2 = "[[{([[({})]])}]" // should throw an error

check = (string) => {
    const arr = string.split('')  // ['[','[', ..]
    const stack = new Stack()

    for(let i=0;i<arr.length;i++) {
        const curElem = arr[i]
        if(curElem === '[' || curElem === '{' || curElem === '('){
            stack.push(curElem)
        } else { // ']', '}', ')'
                if(stack.size() === 0) {
                    return false
                }
                const lastElem = stack.peek()
                stack.pop()
                if(lastElem === '[' && curElem === ']') {
                    // ok
                } else if(lastElem === '{' && curElem === '}') {
                    // ok
                } else if(lastElem === '(' && curElem === ')') {
                    // ok
                } else {
                    // not ok
                    return false
                }
            }
    }
    if(stack.size() !== 0) {
        return false
    }
        return true
}

console.log(check(string1));
console.log(check(string2));