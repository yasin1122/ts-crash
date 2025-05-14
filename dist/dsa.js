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
