
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


// problem 02 ( valid anagaram )-----------------------------------------------


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

// problem 03 ( valid anagaram )-----------------------------------------------



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


// problem 04 ( Group Anagram )----------------------------


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

let strs = ["eat","tea","tan","ate","nat","bat"];
let sorted = strs.map((str)=>str.split("").sort().join(""));
console.log(sorted);
let map={};

for (let i = 0; i < sorted.length; i++) {
    if(!map[sorted[i]]){
        map[sorted[i]] = [strs[i]];
    }
    else{
        map[sorted[i]].push(strs[i])

    }

    
}
return Object.values(map);
// for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j < array.length; j++) {
        
        
//     }
// }