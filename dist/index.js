"use strict";
// Basic Types
let id = 5;
let company = 'DarkMatter Tech';
let isPublished = false;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// Tupple
let person = [1, 'Braces', false];
// Tupple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Jen'],
    [3, 'Henry'],
];
// Unions
let pid;
pid = '22';
// Enum - Enumerated types
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId = cid;
// can also be done as
let ccustomerId = cid;
// Fucntions
function addNums(x, y) {
    return x + y;
}
// console.log(addNums(1, 2))
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const dark = new Person(2, 'Dark Matter');
// ========= SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(5, 'Nji Che', 'Dev Ops');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Nji', 'Zen', 'Joe']);
