var isValid = function(s) {
    const newArr = [];
  
    for (let i = 0; i < s.length; i ++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        newArr.push(s[i]);
      } else if (s[i] === ')' && newArr[newArr.length - 1] === '(' && newArr.length !== 0) {
        newArr.pop();
      } else if (s[i] === ']' && newArr[newArr.length - 1] === '[' && newArr.length !== 0) {
        newArr.pop();
      } else if (s[i] === '}' && newArr[newArr.length - 1] === '{' && newArr.length !== 0) {
        newArr.pop();
      } else {
        return false;
      }
    }
    return newArr.length === 0;    
};
