class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       let ans =[];
       for(let i=0; i<nums.length;i++){
        nums[i]=ans[i];
        nums(i+nums.length)=ans[i];
       }
       return ans;
    }

}      