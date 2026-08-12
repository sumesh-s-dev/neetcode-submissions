class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new set();
        for (let num of sums){
            if(seen.has(sum)){
                return true;
            }
            seen.add(num)
        }
        return false;
    }
}