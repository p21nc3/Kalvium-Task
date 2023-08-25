const express = require('express');
const app = express();

const operators = ['+', '-', '*', '/']; // aur ops add kryo

const history = [];

app.get('/', (req, res) => {
  res.send(operators);
});
app.get('/history', (req, res) => {
        // history figure out krna h
});
app.get('/:fnumber/:operator/:snumber', (req, res) => {

});

function calculate(fnumber, operator, snumber) {
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});