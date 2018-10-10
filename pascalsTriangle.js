/*
  Question taken fromhttps://leetcode.com/problems/pascals-triangle/description/

  Given a non-negative integer, num, generate the first num rows of Pascal's triangle.
  
  In Pascal's triangle, each number is the sum of the two numbers directly above it.
*/

/* 
  Example:

  Input: 5
  Output: 
  [
      [1],
     [1,1],
    [1,2,1],
   [1,3,3,1],
  [1,4,6,4,1]
  ]
*/

const pascalsTriangle = num => {
  if (num === 0) {
    return []
  } else if (num === 1) {
    return [ [ 1 ] ]
  } else {
    const solution = [];

    for (let i = 0; i < num; i++) {
      let row = [] // Reset our row; this will hold our new row that will be pushed into the solution array
      
      for (let j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          row.push(1)
        } else {
          row.push(solution[i-1][j-1] + solution[i-1][j])
        }
      }
      
      solution.push(row)
    }

    return solution
  }
}