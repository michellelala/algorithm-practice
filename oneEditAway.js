/*
  Given two strings as input, find if either of the strings can be changed (either by adding, removing, or editing ONE letter) to be equal to the other string.
*/

/* 
  Example 1:

  Input: "pale", "ple"
  Output: true
  Explanation: We can add an "a" to the second string to change it to "pale".
  ---
  Example 2:

  Input: "pale", "bake"
  Output: false
  Explanation: We would have to make 2 edits (p->b and l->k, OR b->p and k->l) in order for the strings to be equal.
*/

const isOneEditAway = (str1, str2) => {
  const str1CharCount = {} // Keep count of characters in str1

  // Populate our hash table using str1
  for (let i = 0; i < str1.length; i++) {
    if (str1CharCount[str1[i]] === undefined) {
      str1CharCount[str1[i]] = 1
    } else {
      str1CharCount[str1[i]]++
    }
  }

  // Looping through str2, reduce the count of each char that is also found in str1
  for (let i = 0; i < str2.length; i++) {
    if (str1CharCount[str2[i]]) {
      str1CharCount[str2[i]]--
    }
  }

  // Check and keep count of the differences between each instance of a character
  let diff = 0
  for (let key in str1CharCount) {
    diff += str1CharCount[key]
  }

  return diff <= 1
}