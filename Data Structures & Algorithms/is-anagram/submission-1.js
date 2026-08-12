class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return (s.split('').sort().reverse('')===t.split(''.sort().join('')));
    }
}
