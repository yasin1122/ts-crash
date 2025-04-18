'use strict'
// Basic Types
let id = 8
let myName = 'Yasin'
let isActive = true
let x = 'Hello'
let ids = [1, 2, 3, 4, 5]
// Tuple
let person = [1, 'Yasin', true]
// Tuple Array
let people
people = [
  [1, 'Yasin', 36],
  [2, 'Beyza', 25]
]
// Union
let userId
userId = '88'
let move = 'up' // only 4 options above allowed
// Enums
var Direction
;(function (Direction) {
  Direction[(Direction['Up'] = 1)] = 'Up'
  Direction[(Direction['Right'] = 2)] = 'Right'
  Direction[(Direction['Down'] = 3)] = 'Down'
  Direction[(Direction['Left'] = 4)] = 'Left'
})(Direction || (Direction = {}))
const typeUser1 = {
  id: 1,
  name: 'Yasin'
}
// Type Assertion
let cid = 1
// let customerId = <number>cid
let customerId = cid // alternate way
// Functions
function concat(str1, str2) {
  // if there is no return the return type is void
  return str1 + ' ' + str2
}
const interfaceUser1 = {
  id: 1,
  name: 'Yasin'
}
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
class Person {
  constructor(id, name) {
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
  constructor(id, name, position) {
    super(id, name)
    this.position = position
  }
}
// Generics
function getArray(items) {
  return new Array().concat(items)
}
let numArray = getArray([1, 2, 3])
let strArray = getArray(['HTML', 'CSS', 'JS'])
// Try implementing each of these
// Partial<T>: Makes all properties in T optional.
// Required<T>: Makes all properties in T required.
// Readonly<T>: Makes all properties in T read-only.
// Pick<T, K>: Picks a set of properties K from T.
// Omit<T, K>: Constructs a type by omitting keys K from T.
