 var evalRPN = function (tokens) {
  var stack = [];
  let first = 0;
  let second = 0;
  let division = 0;
  let temp = '';
  for (let i = 0; i < tokens.length; i++) {
    temp = tokens[i];
    switch (temp) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        first = stack.pop();
        second = stack.pop();
        stack.push(second - first);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        first = stack.pop();
        second = stack.pop();
        division = second / first;
        if (division > 0) {
          stack.push(Math.floor(division))
        } else {
          stack.push(Math.ceil(division))
        }
        break;
      default:
        stack.push(Number(temp));
    }
  }
  return stack.pop();
};
