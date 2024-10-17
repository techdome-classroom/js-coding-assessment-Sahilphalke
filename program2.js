const decodeTheRing = function (message, pattern) {
  const memo = {}; // Cache for memoization

  // Recursive helper function
  function matchHelper(i, j) {
    const key = `${i}-${j}`; // Memoization key
    if (key in memo) return memo[key]; // Return cached result

    // Base case: if both message and pattern are fully matched
    if (i === message.length && j === pattern.length) return true;

    // If the pattern is exhausted but message is not
    if (j === pattern.length) return false;

    // If we encounter a '*' in the pattern
    if (pattern[j] === '*') {
      // Option 1: Treat '*' as empty (skip to the next character in the pattern)
      // Option 2: Treat '*' as matching one or more characters in the message
      const result = matchHelper(i, j + 1) || (i < message.length && matchHelper(i + 1, j));
      memo[key] = result; // Cache result
      return result;
    }

    // If we encounter a '?' or the current characters match
    if (i < message.length && (pattern[j] === '?' || pattern[j] === message[i])) {
      const result = matchHelper(i + 1, j + 1); // Move to the next character in both
      memo[key] = result; // Cache result
      return result;
    }

    // If none of the above conditions match, return false
    return false;
  }

  return matchHelper(0, 0); // Start matching from the beginning
};

module.exports = decodeTheRing;
