var backspaceCompare = function(s, t) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
        arr1.pop();
      } else {
        arr1.push(s[i]);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (t[i] === "#") {
        arr2.pop();
      } else {
        arr2.push(t[i]);
      }
    }
    arr1 = arr1.join("");
    arr2 = arr2.join("");
    return arr1===arr2;
  }
