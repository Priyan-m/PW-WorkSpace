/*Create a JavaScript program that defines a function to compute the intersection of two arrays. The 
intersection should include elements that appear in both arrays without any duplicates. 
 
Assignment Requirements: 
1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are 
arrays of numbers, and returns an array of their intersection. 
2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and 
`arr2`, it should appear only once in the result. 
3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is 
present in `arr2` and not already included in the result array. 
4. Include example calls to the `intersection` function with different arrays to demonstrate the 
function’s functionality. Include examples with no common elements, all elements common, and 
typical cases.*/

function intersection(arr1, arr2) {
	const result = [];

	for (const element of arr1) {
		if (arr2.includes(element) && !result.includes(element)) {
			result.push(element);
		}
	}

	return result;
}

console.log(intersection([1, 2, 3], [4, 5, 6]));
console.log(intersection([1, 2, 3], [1, 2, 3]));
console.log(intersection([1, 2, 2, 3, 4], [2, 3, 3, 5]));
