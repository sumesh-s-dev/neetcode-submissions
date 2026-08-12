class Solution {
    getConcatenation(nums) {
        let ans=[];
        const num = new Set();
        for(let num of nums){
            nums[i]=ans[i];
            num[i+nums.length]=ans[i];
        }
        return ans;
    }
}
