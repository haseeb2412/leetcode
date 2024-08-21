// two sum 11 input array is sorted
//valid palindrome 
// moves zeros
// reverse a string 
// remove element



//  problem 01  ------------------two sum 11 input array is sorted-----------------------------------

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].clg


// let numbers = [2, 7, 11, 15];
// let target = 9;
// let answer = [];
// let left = 0;
// let right = numbers.length - 1;

// while (left < right) {
//     let sum = numbers[left] + numbers[right];
//     if (sum === target) {
//         answer.push(left + 1);
//         answer.push(right + 1);
//         break;  // Exit the loop once the target sum is found
//     } else if (sum < target) {
//         left++;
//     } else {
//         right--;
//     }
// }

// console.log(answer);



//problem 02  ---------------------valid palindrome--------

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// let s = "A man, a plan, a canal: Panama";
// let s = "This is not a palindrome";


// let string = s.replace(/[^a-zA-Z]/g,"").toLowerCase();
// left =0;
// let right =string.length-1;
// while(left < right){
//     if (string[left] !==string[right]) {
//         console.log("not a palindrome");
//         break;
//     }
//     left++;
//     right--;

// }
// if (left >= right) {
//     console.log("its a palindrome");
// }



//  problem 03 ---------------------- Move Zeros to end of and array ---------------

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]''


let nums = [0,1,0,3,12];
// let answer = nums.sort();
// console.log(answer);

let left=0;

for (let right = 0; right < nums.length; right++) {
    if(nums[right] !== 0){
        [nums[left],nums[right]]= [nums[right],nums[left]];
        left++;
    }
}
console.log(nums);