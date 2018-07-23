/*
  Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.  
*/

/*
  Examples:
  Input: 3524
  Output: 3
  Explanation: 
    (1) 5432 - 2345 = 3087
    (2) 8730 - 0378 = 8352
    (3) 8532 - 2358 = 6174
*/

const kaprekarsConstant = num => {
  // Our end case is 6174, which returns 0 and ultimately, the number of times the function had to run in order to reach Kaprekar's Constant
  if (num === 6174) {
    return 0
  }

  // Stringify the input and split into an array
  let numArr = num.toString().split("")
  // Add 0's to the array until the length is 4
  if (numArr.length < 4) {
    while (numArr.length < 4) {
      numArr.unshift(0)
    }
  }
  // Sort the array from biggest to smallest, then join into a string
  let bigger = numArr.slice(0).sort((a, b) => b - a).join("")
  // Sort the array from smallest to biggest, then join into a string
  let smaller = numArr.slice(0).sort((a, b) => a - b).join("")
  // Create the new num by subtracting smallest from biggest
  let newNum = bigger - smaller

  // return 1 and recursively call the function again to keep count
  return 1 + kaprekarsConstant(newNum)
}