
// static array fixed in size 
// console.log("haseeb here  new file");

// problem 01 ( contains duplicate ) -----------------------------------------------------------------------


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// let num = [1,2,3,1];

// for (let i = 0; i < num.length; i++) {
//     let s = new Set([...num]);
//      return s.size !== num.length;

// }


// problem 02 ( valid anagaram )----------------------------------------------------------------------


// Example 1:
// 
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// 
// Input: s = "rat", t = "car"
// Output: false
// 

// let s = "rat"; let t = "car";

// let ss = s.split("").sort().join("");
// let tt = t.split("").sort().join("");
// if (ss == tt) {
//     console.log('return true');
// }
// else{
//     console.log("return false");
// }
// console.log("ss",ss);
// console.log("tt",tt);

// problem 03 ( valid anagaram )----------------------------------------------------------------------

// problem ( 03 two sum )

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// let nums = [3,3], target = 6;
// let answer=[];
// for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i]+nums[j] == target) {
//             if(answer.includes(i) || answer.includes(j)){
//                 continue;
//             }else{
//                 answer.push(i,j);

//             }
//         }
//     }
    
// }

// console.log("answer",answer);


// problem 04 ( Group Anagram )-------------------------------------------------------------------------------


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// let strs = ["eat","tea","tan","ate","nat","bat"];
// let sorted = strs.map((str)=>str.split("").sort().join(""));
// console.log(sorted);
// let map={};

// for (let i = 0; i < sorted.length; i++) {
//     if(!map[sorted[i]]){
//         map[sorted[i]] = [strs[i]];
//     }
//     else{
//         map[sorted[i]].push(strs[i])

//     }

    
// }
// return Object.values(map);


// problem 05 ( top k frequent element ) --------------------------------------------------------------
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 
// let  nums = [1,1,1,2,2,3], k = 2;

// let freqs = {};
// for (num of nums) {
//     if (freqs[num] === undefined) { 
//         freqs[num] = 1; 
//     } else {
//         freqs[num] = freqs[num] + 1;
//     }
// }
    
//     // Convert to array with [frequency, number] elements
// let frequencyArray = [];
// for (key in freqs) {
//     frequencyArray.push([freqs[key], key]);
// }
    
//     // Sort in descending order with frequency as key
// frequencyArray.sort((a, b) => {
//     return b[0] - a[0];
// });
    
//     // Get most frequent element out of array
// mostFreq = [];
// for (let i = 0; i < k; i++) {
//     mostFreq.push(frequencyArray[i][1]);
// }
    
// return mostFreq;


// problem 06 ( product of array except self )-------------------------------------------------------------

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// let nums = [1,2,3,4];
// const n = nums.length;
// const answer=[];

// let left = new Array(n).fill(1);
// let right = new Array(n).fill(1);

// for (let i = 1; i < n; i++) {
//     left[i]=left[i-1]*nums[i-1];
    
// }

// for (let i = n-2; i >= n; i--) {
//     right[i]=right[i+1]*nums[i+1];
    
// }

// for (let i = 0; i < n; i++) {
//     answer[i]=left[i]*right[i];
    
// }
// return answer;
// console.log("hello haseeb");
// const n = nums.length;
// const answer = [];

// const left = new Array(n).fill(1);
// const right = new Array(n).fill(1);

// // Calculate the product of all elements to the left 
// //of each element
// for (let i = 1; i < n; i++) {
//     left[i] = left[i - 1] * nums[i - 1];
// }

// // Calculate the product of all elements to the right 
// //of each element
// for (let i = n - 2; i >= 0; i--) {
//     right[i] = right[i + 1] * nums[i + 1];
// }

// for (let i = 0; i < n; i++) {
//     answer[i] = left[i] * right[i];
// }

// return answer;


// problem ( 07 )----------------------------------------------------------------------------------------------------------

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


let input = "A man, a plan, a canal: Panama";

let string = input.replace(/[^a-zA-z]/g,"").toLowerCase();
console.log("string",string);
let ispalindrome = string === string.split('').reverse().join('')
console.log("ispalindrome ",ispalindrome);


// final answer ''
// var isPalindrome = function(s) {
//     let ispalindrome;
//     let string = s.replace(/[^a-zA-Z]/g,"").toLowerCase();
//     return ispalindrome = string === string.split('').reverse().join('');
// };



// porblem 08 ( two sum input array is sorted )
// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].'


let numbers = [2,7,11,15], target = 9;
let answer=[];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[i]+numbers[j]==target) {
            
            answer.push(numbers.indexOf(numbers[i]));
            answer.push(numbers.indexOf(numbers[j]));
            
        }
    }
    
}
console.log("final answer",answer);


// problem 10 (container with most water )

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49


let height = [1,8,6,2,5,4,8,3,7];
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while( left < right ) {
        let minHeight = Math.min( height[ left ] , height[ right ] );
        let dif = Math.abs ( left - right )
        if( maxArea <  ( minHeight * dif ) ) {
            maxArea = minHeight * dif 
        }
       if( height[ left ] <  height[ right ] ) {
            left++
       }else{
            right--;
       }
    }

    return maxArea
};


// remove duplicate leetcode problem 

let i = 0;
for (let j = 1; j < nums.length; j++) {
  if (nums[i] !== nums[j]) {
    i++;
    nums[i] = nums[j];
  }
}
return i + 1;



