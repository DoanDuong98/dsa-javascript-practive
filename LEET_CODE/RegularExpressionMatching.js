

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 *  '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.
 * 
 *  Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 */
var isMatch = function(s, p) {
   const n = s.length;
   const m = p.length;
   const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
   dp[0][0] = true;

   for (let i = 1; i <= m; i++) {
      if (p[i - 1] === "*") {
            dp[0][i] = dp[0][i - 2];
      }
   }

   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
               dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === "*") {
               dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === "."));
            }
      }
   }

   return dp[n][m];
};

console.log(isMatch("aa", "a*"));

