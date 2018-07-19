/*
  Question taken from https://leetcode.com/problems/fizz-buzz/description/:

  Write a program that outputs the string representation of numbers from 1 to n.

  Multiples of 3 should output "Fizz".
  Multiples of 5 should output "Buzz".
  Multiples of both 3 AND 5 should output "FizzBuzz".
*/

/* 
  Example:

  fizzBuzz(15) ==> 
  [  
    "1", "2", "Fizz", "4", "Buzz",
    "Fizz", "7", "8", "Fizz", "Buzz",
    "11", "Fizz", "13", "14", "FizzBuzz"
  ]
*/

const fizzBuzz = (n) => {
  const solution = []
  let i = 1
  
  // Until i reaches and is equal to n, push the appropriate value into our solution array
  while (i <= n) {
      if (i % 3 === 0 && i % 5 === 0) {
          solution.push("fizzbuzz")
      } else if (i % 3 === 0) {
        solution.push("fizz")
      } else if (i % 5 === 0) {
        solution.push("buzz")
      } else {
        solution.push(i.toString())
      }

      i++
  }

  return solution
};