function decodeTheRing(s, p) {
  let i = 0, j = 0;

  while (i < s.length && j < p.length) {
    if (p[j] === '*') {
      while (j < p.length && p[j] === '*') j++;
      if (j === p.length) return true;
    } else if (p[j] === '?' || s[i] === p[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return i === s.length && j === p.length;
}
  module.exports = decodeTheRing;