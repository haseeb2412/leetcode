// two sum 11 input array is sorted
//valid palindrome 
// moves zeros
// reverse a string 
// remove element



//  problem 01  ------------------two sum 11 input array is sorted-----------------------------------

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].clg


let numbers = [2, 7, 11, 15];
let target = 9;
let answer = [];
let left = 0;
let right = numbers.length - 1;

while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
        answer.push(left + 1);
        answer.push(right + 1);
        break;  // Exit the loop once the target sum is found
    } else if (sum < target) {
        left++;
    } else {
        right--;
    }
}

console.log(answer);

