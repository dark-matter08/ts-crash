// Basic Types
let id: number = 5
let company: string = 'DarkMatter Tech'
let isPublished: boolean = false
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'hello']

// Tupple
let person: [number, string, boolean] = [1, 'Braces', false]

// Tupple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Jen'],
    [3, 'Henry'],
]

// Unions
let pid: string | number
pid = '22'


// Enum - Enumerated types
enum Direction1 {
    up = 1,
    down,
    left,
    right
}

enum Direction2 {
    up = 'up',
    down = 'down',
    left =  'left',
    right = 'right'
}

// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
// can also be done as

let ccustomerId = cid as number

// Fucntions
function addNums(x: number, y: number): number{
    return x + y
}

// console.log(addNums(1, 2))

function log(message: string | number): void {
    console.log(message)
}

// log(false)


// =========== interfaces ======
  

interface UserInterface  {
    readonly id: number,
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}


// you cant use an "interface" with primitives or unions as with "type"


interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


// =================================== Classes ====================================

interface PersonInterface  {
    id: number,
    name: string
    register():  string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const dark = new Person(2, 'Dark Matter')


// ========= SubClasses

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(5, 'Nji Che', 'Dev Ops')


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Nji', 'Zen', 'Joe'])

