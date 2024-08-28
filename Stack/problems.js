// problem 01 -------------------Min Stack ---------------------

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2



var MinStack = function() {
    this.stack =[];
    this.min = Infinity;
    this.size =0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(val < this.min){
        this.min =val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poped =this.stack.pop();
    if(this.min ==  poped){
        this.min =Math.min(...this.stack);
    }

    return poped;
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// add comment



//  problem _----------------------- generate parentheses----------------

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

var generateParenthesis = function(n) {
    const ans=[];

    var dfs =function (s,opens,closes){
        if(closes> opens ) return
        if(opens > n ) return
        if(opens === n && closes == n ){
            ans.push(s)
        }
        dfs(s +"(",opens+1,closes)
        dfs(s +")",opens,closes + 1)
    }

    dfs ("",0,0)
    return ans
};




// problem --------- evaluate reverse polish notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    const isOperator = (str) => {
        return str === "+" || str === "-" || str === "*" || str === "/";
    };

    for (const token of tokens) {
        if (isOperator(token)) {
            const ele2 = parseInt(stack.pop());
            const ele1 = parseInt(stack.pop());
            let result = 0;

            if (token === "+") {
                result = ele1 + ele2;
            } else if (token === "-") {
                result = ele1 - ele2;
            } else if (token === "*") {
                result = ele1 * ele2;
            } else if (token === "/") {
                result = Math.trunc(ele1 / ele2); // Ensure integer division
            }

            stack.push(result.toString());
        } else {
            stack.push(token);
        }
    }

    return parseInt(stack.pop());
};