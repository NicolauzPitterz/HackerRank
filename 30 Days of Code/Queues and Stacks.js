function Solution() {
    //Write your code here
    let stack = [],
        queue = [];

    this.pushCharacter = (a) => {
        return stack.push(a);
    };
    this.enqueueCharacter = (b) => {
        return queue.unshift(b);
    };
    this.popCharacter = () => {
        return stack.pop();
    };
    this.dequeueCharacter = () => {
        return queue.pop();
    };
}
