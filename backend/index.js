const express = require('express');
const app = express();

const operators = ['plus', 'minus', 'into', 'by'];

const history = [];
app.get('/', (req, res) => {
  res.send(operators);
});

app.get('/history', (req, res) => {
  const recentHistory = history.slice(-20);
  res.send(recentHistory);
});

app.get('/:fnumber/:operator/:snumber', (req, res) => {
  const fnumber = req.params.fnumber;
  const operator = req.params.operator;
  const snumber = req.params.snumber;
  const answer = calculate(fnumber, operator, snumber);
  history.push({
    question: `${fnumber} ${operator} ${snumber}`,
    answer: answer
  });
  res.send({
    question: `${fnumber} ${operator} ${snumber}`,
    answer: answer
  });
});

function calculate(fnumber, operator, snumber) {
  if (!operators.includes(operator)) {
    throw new Error(`Invalid operator: ${operator}`);
  }
  const nums = [Number(fnumber), Number(snumber)];
  switch (operator) {
    case 'plus':
      return nums.reduce((a, b) => a + b);
    case 'minus':
      return nums.reduce((a, b) => a - b);
    case 'into':
      return nums.reduce((a, b) => a * b);
    case 'by':
      return nums[0] / nums[1];
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});