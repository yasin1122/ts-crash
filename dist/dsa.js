// Section 3: String Reversal
function reverse(str) {
  // let result = ''
  // for (let i = str.length-1; i >= 0; i--) {
  //     result += str[i]
  // }
  // return result

  // return str.split('').reverse().join('')

  return str.split('').reduce((reversed, char) => char + reversed, '')
}
console.log(reverse('hello'))

// Section 4: Palindromes
function palindrome(str) {
  // return str === str.split('').reverse().join('')

  // return str === str.split('').reduce((reversed, char) => char + reversed, '')

  // for (let i = 0, j = str.length - 1; i < j; i++, j--) {
  //   if (str[i] !== str[j]) return false
  // }
  // return true

  return str.split('').every((char, i) => char === str[str.length - 1 - i])
}
console.log(palindrome('abcdcba'))

// Section 5: Integer Reversal
function reverseInt(n) {
  // if(n < 0) {
  //     return 0 - Number(String(n).split('').reverse().join('').slice(0, -1))
  // }
  // return Number(String(n).split('').reverse().join(''))

  // const arr = n < 0 ? ['-'] : []
  // n = Math.abs(n)

  // while(Math.abs(n) > 9) {
  //     arr.push(n % 10)
  //     n = (n - (n % 10)) / 10
  // }
  // arr.push(n)

  // return Number

  // const isNegative = n < 0 ? true : false
  // let reversedNum = 0
  // n = isNegative ? -n : n

  // while (n !== 0) {
  //   reversedNum = reversedNum * 10 + (n % 10)
  //   n = (n / 10) | 0
  // }
  // return isNegative ? -reversedNum : reversedNum

  const reversedNum = n.toString().split('').reverse().join('')
  return reversedNum * Math.sign(n)
}
console.log(reverseInt(123400))

// Section 6: MaxChars
function maxChar(str) {
  // const charMap = new Map()
  const charMap = {}
  let maxNum = 0
  let maxCh = ''

  for (let char of str.split('')) {
    // charMap.set(char, charMap.get(char) + 1 || 1)
    charMap[char] = charMap[char] + 1 || 1
    // if (charMap.get(char) > maxNum) {
    //   maxNum = charMap.get(char)
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxCh = char
    }
  }
  return maxCh
}
console.log(maxChar('csdyyyyyyfasdfaaa'))

// Section 7: FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = ''
    i % 3 === 0 && (output += 'fizz')
    i % 5 === 0 && (output += 'buzz')
    console.log(output || i)
  }
}
fizzBuzz(15)

// Section 8: Array Chunking
function chunk(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    // result.push(array.slice(i, i + size))
    const innerArr = []
    for (let j = i; j < i + size && j < array.length; j++) {
      innerArr.push(array[j])
    }
    result.push(innerArr)
  }
  return result
}
console.log(chunk([0, 1, 2, 3, 4, 5, 6], 2))

// Section 9: Anagrams
function anagrams(stringA, stringB) {
  // remove spaces, extra characters and lowercase both inputs
  // cast strings to arrays, sort them, join them and compare them
  const cleanStr = str =>
    str
      .replace(/[^a-zA-Z]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  return cleanStr(stringA) === cleanStr(stringB)

  // const stringMapMaker = str => {
  //   const stringMap = {}
  //   for (const char of str.replace(/[^a-zA-Z]/g, '').toLowerCase()) {
  //     stringMap[char] = stringMap[char] + 1 || 1
  //   }
  //   return stringMap
  // }
  // const stringMapA = stringMapMaker(stringA)
  // const stringMapB = stringMapMaker(stringB)

  // if (Object.keys(stringMapA).length !== Object.keys(stringMapB).length) {
  //   return false
  // }

  // for (const key of Object.keys(stringMapA)) {
  //   if (stringMapA[key] !== stringMapB[key]) return false
  // }

  // return true
}
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

// Section 10: Sentence Capitalization
function capitalize(str) {
  // return str
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.slice(1))
  //   .join(' ')
  let capitalizedStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      capitalizedStr += str[i].toUpperCase()
    } else if (str[i - 1] === ' ') {
      capitalizedStr += str[i].toUpperCase()
    } else {
      capitalizedStr += str[i]
    }
  }
  return capitalizedStr
}
console.log(capitalize('how are you doing?'))

// Section 11: Printing Steps
function steps(n) {
  // iterate 1 to n inclusive
  // print i number of # and n - i number of spaces
  for (let i = 1; i <= n; i++) {
    let logString = ''
    for (let j = 1; j <= n; j++) {
      j <= i ? (logString += '#') : (logString += ' ')
    }
    console.log(logString)
  }
}
steps(5)
