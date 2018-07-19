/*
  Given two inputs, an array of strings and an integer, find the most common words in the array. If int is 0 or not given, find the most common word. If int is 2, find the 2 most common words, etc. 
*/

/*
  Example:

  Input: ["dog", "cat", "deer", "dog", "fish", "cat", "dog"], 2

  Output: ["dog", "cat"]
*/

const mostCommonWords = (arr , int) => {
  const wordCount = {}
  const newArray = []

  // Populate our wordCount hash table by looping through the array and creating keys for each word with the count as the value
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  }
  
  // Create array pairs for each key/value pair in the wordCount hash
  for (let word in wordCount) {
    newArray.push([word, wordCount[word]])
  }
  
  // Sort the array alphabetically
  const sorted = newArray.sort((a, b) => b[1] - a[1])
  
  const solution = []
  
  for (let i = 0 ; i < int; i++) {
    solution.push(sorted[i][0])
  }
  
  return solution
}
