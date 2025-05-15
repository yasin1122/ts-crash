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
