class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)return false;
        const map={};
        for(char in s){
            map[char]=map([char]||0)+1;
        }
        for(char in t){
            if(!map[char])return false;
            map[char]=map[char]-1;
        }
        return true;
    }
}