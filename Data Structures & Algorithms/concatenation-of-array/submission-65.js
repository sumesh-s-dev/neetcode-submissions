class Solution {
    getConcatenation(nums) {
        let ans=[];
        for(let i=0; i<nums.length; i++){
            nums[i]=ans[i];
            num[i+nums.length]=ans[i];
        }
        return ans;
    }
}
