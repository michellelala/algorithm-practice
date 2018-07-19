/*
  Question:

  Given two string inputs, ransom note and magazine, determine if the ransom note can be constructed using the letters from the magazine.
*/

/*
  Examples:

  canConstruct("aa", "ab") ==> False
  canConstruct("a", "b") ==> False
  canConstruct("aa", "aab") ==> True
*/

const canConstruct = (note, mag) => {
  // Create magHash for mag letters 
  const magHash = {}

  // Loop through mag, creating and keeping count for each unique letter
  for (let i = 0; i < mag.length; i++) {
    if (magHash[mag[i]]) {
      magHash[mag[i]]++
    } else {
      magHash[mag[i]] = 1
    }
  }

  // Loop through note and check for existence of the letter with magHash
  for (let j = 0; j < note.length; j++) {
    if (!magHash[note[j]] || magHash[note[j]] < 0) {
      return false
    } else {
      magHash[note[j]]--
    }
  }

  return true
}