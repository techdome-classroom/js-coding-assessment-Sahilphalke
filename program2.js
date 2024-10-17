const decodeTheRing = function (message, pattern) {
    const m = message.length;
    const n = pattern.length;

    // Create a DP table
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    // Base case: both strings are empty
    dp[0][0] = true;

    // Fill the first row for patterns starting with '*'
    for (let j = 1; j <= n; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]; // '*' can match empty
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (pattern[j - 1] === '*') {
                // '*' can match zero or more characters
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
                // '?' matches any single character or characters are the same
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    // The result is in the bottom-right corner of the DP table
    return dp[m][n];
};

module.exports = decodeTheRing;
