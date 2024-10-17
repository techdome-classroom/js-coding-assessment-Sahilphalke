const decodeTheRing = function (s, p) {
  // Initialize pointers for the secret message and decoder key
  let i = 0;
  let j = 0;

  // Iterate through both strings
  while (i < s.length && j < p.length) {
    // If the current character in the decoder key is a star,
    // skip all characters in the secret message until a mismatch or the end
    if (p[j] === '*') {
      while (i < s.length && j < p.length && p[j] === '*') {
        j++;
      }
      // If the end of the decoder key is reached, the match is successful
      if (j === p.length) {
        return true;
      }
      // If not, continue matching the remaining characters
      continue;
    }

    // If the current character in the decoder key is a question mark,
    // skip the current character in the secret message
    if (p[j] === '?') {
      j++;
      continue;
    }

    // If the characters don't match, the match fails
    if (s[i] !== p[j]) {
      return false;
    }

    // Increment both pointers
    i++;
    j++;
  }

  // If the end of both strings is reached, the match is successful
  return i === s.length && j === p.length;
};
  
  module.exports = decodeTheRing;