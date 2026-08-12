class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let ans=[];
      const map={};
      for(let num in nums){
        ans.append(num);
      }
      return ans;
    }

}