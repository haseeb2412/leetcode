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




// let nums = [0,1,2,2,3,0,4,2], val = 2;
// let left =0;
// for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== val) {
        
//         [nums[left],nums[right]]=[nums[right],nums[left]];
//         left++;
//     }

// }
// for (let i = left; i < nums.length; i++) {
//     nums[i] = '_';
// }

// console.log(nums);



// ---------------------------remove element leet code ----------------------solution----------------
// let count = 0;
// // Loop through all the elements of the array
// for (let i = 0; i < nums.length; i++) {
//     // If the element is not val
//     if (nums[i] !== val) {
//         nums[count++] = nums[i];
//     }
// }
// return count;


// pronlem ----------------------------  threesum ----------------------------


// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.\\



// let nums = [-1,0,1,2,-1,-4];
// let result = [];
// nums.sort((a,b)=>a-b);
// for (let i = 0; i < nums.length; i++) {
//     if (i>0 && nums[i]== nums[i-1]) {
//         continue;
//     }

//     let left = i+1,right = nums.length-1;

//     while (left < right) {
//         let threeSum = nums[i]+nums[left] + nums[right];

//         if (threeSum >0) {
//             right--;
//         }else if(threeSum<0){
//             left++;
//         }else{
//             result.push([nums[i],nums[left],nums[right]]);
//             left++;


//             // this code is addition or check for more conditions
//             while (nums[left] == nums[left-1] && left < right) {
//                 left++;
//             }
//         }
//     }

// }
// console.log(result);



// pronlem ----------------------------  valid parentheses   ----------------------------


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true
// let s = "()[]{}";

// const stack = [];
    
// for (let i = 0 ; i < s.length ; i++) {
//     let c = s.charAt(i);
//     switch(c) {
//         case '(': stack.push(')');
//             break;
//         case '[': stack.push(']');
//             break;
//         case '{': stack.push('}');
//             break;
//         default:
//             if (c !== stack.pop()) {
//                 return false;
//             }
//     }
// }

// return stack.length === 0;


// problem ------------------------ binary search ------------------------

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1



let nums = [-1,0,3,5,9,12], target = 9;
let = ans=[];
let left =0 ,right = nums.length-1;
while (left <= right) {
    let mid =Math.floor((left+right)/2);
    if (nums[mid]===target) {
        ans.push(mid);
    }else if(nums[mid] < target){
        left =mid+1;
    }else{
        right = mid -1;
    }
    return -1;
}
console.log(ans)



// this is the correct code for binary search 
var search = function(nums, target) {
    let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return -1;
};



