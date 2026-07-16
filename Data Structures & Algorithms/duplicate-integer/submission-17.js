class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        // Create a Set to store numbers we have already seen
        const seen = new Set();

        // Loop through every number in the array
        for (let num of nums) {

            // Check if this number already exists in the Set
            if (seen.has(num)) {
                // If yes → duplicate found
                return true;
            }

            // If not → store the number in the Set
            seen.add(num);
        }

        // If we finish the loop and find no duplicates
        return false;
    }
}