/*Given a string s consisting of words and spaces, 
return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. 
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one,
  using all the letters. 
 
Assignment Requirements:  
Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word. 
 
Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length*/

function lengthOfLastWord(sentence) {
	const words = sentence.trim().split(/\s+/);
	const lastWord = words[words.length - 1];

	return lastWord.length;
}

function sortWord(word) {
    const lowerCaseWord = word.toLowerCase();
    const characters = lowerCaseWord.split('');
    const sortedCharacters = characters.sort();

    return sortedCharacters.join('');
}

function isAnagram(firstWord, secondWord) {
    const sortedFirstWord = sortWord(firstWord);
    const sortedSecondWord = sortWord(secondWord);

    return sortedFirstWord === sortedSecondWord;
}

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));