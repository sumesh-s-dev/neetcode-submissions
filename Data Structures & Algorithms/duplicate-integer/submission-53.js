class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const map = {};

        for (let num of nums) {

            if (map[num]) {
                return true;   // duplicate found
            }

            map[num] = true;   // store number in map
        }

        return false;
    }
}