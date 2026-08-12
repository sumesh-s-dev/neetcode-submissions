class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const seen = new Set();
      for(let num in nums){
        if (seen.has(nums)){
            return true;
        }
        seen.add(num);
      }
      return false;
    }
}