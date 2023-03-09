class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if (len(s) <= 1):
            return len(s)
        
        seenChars = {};
        longest = 0;
        left = 0;
        right = 0;
        
        while (left < len(s) and right < len(s)):
            if (s[right] in seenChars):
                left = max(left, seenChars[s[right]] + 1)
            seenChars[s[right]] = right
            longest = max(longest, right - left + 1)
            right += 1
        
        return longest