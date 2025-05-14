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
