const express = require('express');
const fs = require('fs');
const app = express();
const operators = ['plus', 'minus', 'into', 'by', 'power', 'sqrt', 'log', 'sin', 'cos', 'tan'];
let history = [];
if (fs.existsSync('history.json')) {
  const historyData = fs.readFileSync('history.json', 'utf8');
  history = JSON.parse(historyData);
}

app.get('/', (req, res) => {
  res.send(`
  <h1 style="text-align: center;">Welcome to CALBot</h1>
  <h3 style="text-align: center;">Available endpoints</h3>
  <head>
      <title style="text-align: center;">Operator and Example Table</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h3>Operator and Example Table</h3>
    <table>
        <tr>
            <th>Operator</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>plus</td>
            <td>2/plus/3</td>
        </tr>
        <tr>
            <td>minus</td>
            <td>5/minus/2</td>
        </tr>
        <tr>
            <td>into</td>
            <td>4/into/6</td>
        </tr>
        <tr>
            <td>by</td>
            <td>10/by/2</td>
        </tr>
        <tr>
            <td>power</td>
            <td>2/power/3</td>
        </tr>
        <tr>
            <td>sqrt</td>
            <td>16/sqrt/0</td>
        </tr>
        <tr>
            <td>log</td>
            <td>10/log/100</td>
        </tr>
        <tr>
            <td>sin</td>
            <td>6/sin/</td>
        </tr>
        <tr>
            <td>cos</td>
            <td>60/cos/</td>
        </tr>
        <tr>
            <td>tan</td>
            <td>30/tan/</td>
        </tr>
    </table>
</body>
  `);
});

app.get('/operators', (req, res) => {
  const operatorExamples = {
    plus: '2 + 3',
    minus: '5 - 2',
    into: '4 * 6',
    by: '10 / 2',
    power: '2 ^ 3',
    sqrt: '√(16)',
    log: 'log(100)',
    sin: 'sin(45)',
    cos: 'cos(60)',
    tan: 'tan(30)'
  };

});

app.get('/history', (req, res) => {
  const recentHistory = history.slice(-20);
  res.send(`
  <h1>History(Latest 20)</h1>
  <table border="1">
    <thead>
    <style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th, td {
        text-align: left;
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
    
    th {
        background-color: #f2f2f2;
    }
</style>
      <tr>
        <th>Question</th>
        <th>Answer</th>
      </tr>
    </thead>
    <tbody>
      ${recentHistory.map((operation) => `
        <tr>
          <td>${operation.question}</td>
          <td>${operation.answer}</td>
        </tr>
      `)}
    </tbody>
  </table>`);
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