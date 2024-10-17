const decodeTheRing = function (message, pattern) {
  const m = message.length;
  const n = pattern.length;

  // Dynamic programming table
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true; // Both message and pattern are empty

  // Handle patterns that start with '*'
  for (let j = 1; j <= n; j++) {
    if (pattern[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (pattern[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' can match empty or one char
      } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // Match one character
      }
    }
  }

  return dp[m][n]; // Return the result for the full message and pattern
};

module.exports = decodeTheRing;
