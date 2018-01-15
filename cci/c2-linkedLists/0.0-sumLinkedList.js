let {Node} = require('./lib-linkedLists.js');

// ------- setup -------
let tail = Node(100, null);
let second = Node(2, tail);
let head = Node(2000, second);

// ------- exec  -------
console.log(sum(head));

// ------- define function  -------
function sum(linkedListNode) {
    if (!linkedListNode.next) {
        return linkedListNode.value;
    }

    return linkedListNode.value + sum(linkedListNode.next);
}
