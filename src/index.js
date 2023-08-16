module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = new Set();
  const bracketPairs = {};

  for (const [open, close] of bracketsConfig) {
    openBrackets.add(open);
    bracketPairs[close] = open;
  }
  for (const char of str) {
    if (openBrackets.has(char)) {
      if (char === bracketPairs[char] && stack[stack.length - 1] === char) {
        stack.pop(); 
      } else {
        stack.push(char);
      }
    } else {
      const openBracket = bracketPairs[char];
      if (
        openBracket !== undefined &&
        stack[stack.length - 1] === openBracket
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
    
}
