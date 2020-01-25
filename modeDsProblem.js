function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
  }
  
  function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }
  
  function cleanString(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }


function palindrome(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }