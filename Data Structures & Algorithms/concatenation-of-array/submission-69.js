class Solution {
    getConcatenation(nums) {
        let ans=[];
        for(let i=0; i<nums.length; i++){
            nums[i]=ans[i];
            nums[i+nums.length]=ans[i];
        }
        return ans;
    }
}
