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


// let nums = [0,1,0,3,12];
// let answer = nums.sort();
// console.log(answer);

// let left=0;

// for (let right = 0; right < nums.length; right++) {
//     if(nums[right] !== 0){
//         [nums[left],nums[right]]= [nums[right],nums[left]];
//         left++;
//     }
// }
// console.log(nums);




// problem 04 --------------------------reverse a string ----------------


// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]



// let  s = ["h","e","l","l","o"];
// let str = s.reverse();
// let left =0;
// let right=s.length-1;
// while (left < right) {
//     let temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;

//     left++;
//     right--;
// }
// console.log(str);
// console.log(s);



// problem 05 -------------------- remove element ------------------


// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the fiv




let nums = [0,1,2,2,3,0,4,2], val = 2;
let left =0;
for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
        
        [nums[left],nums[right]]=[nums[right],nums[left]];
        left++;
    }

}
for (let i = left; i < nums.length; i++) {
    nums[i] = '_';
}

console.log(nums);



// ---------------------------remove element leet code ----------------------solution----------------
let count = 0;
// Loop through all the elements of the array
for (let i = 0; i < nums.length; i++) {
    // If the element is not val
    if (nums[i] !== val) {
        nums[count++] = nums[i];
    }
}
return count;