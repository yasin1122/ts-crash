// Basic Types
let id: number = 8
let myName: string = 'Yasin'
let isActive: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]

// Tuple
let person: [number, string, boolean] = [1, 'Yasin', true]

// Tuple Array
let people: [number, string, number][]
people = [
  [1, 'Yasin', 36],
  [2, 'Beyza', 25]
]

// Intersection Types
type A = { name: string }
type B = { age: number }
type AB = A & B // must have BOTH name and age

// Union
let userId: number | string
userId = '88'

// Literal Types
type Directions = 'up' | 'right' | 'down' | 'left'
let move: Directions = 'up' // only 4 options above allowed

// Enums
enum Direction {
  Up = 1, // Starts at 0 if left empty
  Right, // Can be a string as well like Right = "right"
  Down,
  Left
}
// console.log(Direction.Left)

// Objects
type User = {
  id: number
  name: string
}

const typeUser1: User = {
  id: 1,
  name: 'Yasin'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number // alternate way

// Functions
function concat(str1: string, str2: string): string {
  // if there is no return the return type is void
  return str1 + ' ' + str2
}

// Interfaces
interface UserInterface {
  readonly id: number // read only
  name: string
  age?: number // optional
}

const interfaceUser1: UserInterface = {
  id: 1,
  name: 'Yasin'
}

interface ProUser extends UserInterface {
  isAdmin: boolean
}

interface MathFunc {
  (x: number, y: number): number
}
const add: MathFunc = (num1: number, num2: number): number => num1 + num2
const subtract: MathFunc = (num1: number, num2: number): number => num1 - num2

// Classes
interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  id: number // private = only visible in this class
  name: string // protected = only visible in this class and its subclasses

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered!`
  }
}

const yasin = new Person(1, 'Yasin')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3])
let strArray = getArray<string>(['HTML', 'CSS', 'JS'])

// Try implementing these
// Partial<T>: Makes all properties in T optional.
// Required<T>: Makes all properties in T required.
// Readonly<T>: Makes all properties in T read-only.
// Pick<T, K>: Picks a set of properties K from T.
// Omit<T, K>: Constructs a type by omitting keys K from T.

// Map example
type MapKey = string | boolean | number[]
type MapVal = string | boolean

const newMap: Map<MapKey, MapVal> = new Map([
  ['name', 'Yasin'],
  ['verified', true]
] as [MapKey, MapVal][])
newMap.set([1, 2, 3], false)
newMap.set(false, 'Hello')
// newMap.delete(false)

newMap.forEach((value, key) => {
  console.log(key, value)
})
console.log(newMap.size)

// Generics Practice
function identity<T>(value: T): T {
  return value
}
const stringIdentity = identity('Hello')
const numberIdentity = identity(22)

function wrapInArray<T>(item: T): T[] {
  return [item]
}
const numWrap = wrapInArray(11)

function returnFirst<T>(arr: T[]): T {
  return arr[0]
}

// day 4
