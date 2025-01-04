const readline = require('readline');
const { clearScreenDown } = require('readline');

// Game parameters
const WIDTH = 20;
const HEIGHT = 10;
const EMPTY = '.';
const SNAKE_BODY = 'O';
const SNAKE_HEAD = '@';
const FOOD = 'X';

let snake = [{ x: 1, y: 1 }];
let direction = 'right';
let food = { x: 5, y: 5 };
let gameOver = false;
let score = 0;


let board = Array(HEIGHT).fill().map(() => Array(WIDTH).fill(EMPTY));


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function updateBoard() {
  board = board.map(row => row.map(() => EMPTY));
  
  // Place snake
  snake.forEach((segment, index) => {
    board[segment.y][segment.x] = index === 0 ? SNAKE_HEAD : SNAKE_BODY;
  });

  // Place food
  board[food.y][food.x] = FOOD;
}

// Function to draw the board
function drawBoard() {
  clearScreenDown(rl);
  console.log(`Score: ${score}`);
  board.forEach(row => {
    console.log(row.join(''));
  });
}

// Function to move the snake
function moveSnake() {
  let newHead = { ...snake[0] };

  switch(direction) {
    case 'up': newHead.y--; break;
    case 'down': newHead.y++; break;
    case 'left': newHead.x--; break;
    case 'right': newHead.x++; break;
  }

  // Check if snake hit wall or itself
  if (newHead.x < 0 || newHead.x >= WIDTH || newHead.y < 0 || newHead.y >= HEIGHT || 
      board[newHead.y][newHead.x] === SNAKE_BODY) {
    gameOver = true;
    return;
  }

  snake.unshift(newHead);

  // Check if snake ate food
  if (newHead.x === food.x && newHead.y === food.y) {
    score++;
    generateFood();
  } else { tail
    snake.pop(); 
  }
}


function generateFood() {
  do {
    food = { 
      x: Math.floor(Math.random() * WIDTH), 
      y: Math.floor(Math.random() * HEIGHT) 
    };
  } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
}


function gameLoop() {
  if (!gameOver) {
    moveSnake();
    updateBoard();
    drawBoard();
    setTimeout(gameLoop, 200); 
  } else {
    console.log('Game Over! Final Score:', score);
    rl.close();
  }
}


rl.input.setRawMode(true);
rl.input.resume();
rl.input.setEncoding('utf8');
rl.input.on('data', (key) => {

  if (key === '\u001B\u005B\u0041') direction = 'up';      // Up arrow
  else if (key === '\u001B\u005B\u0042') direction = 'down'; // Down arrow
  else if (key === '\u001B\u005B\u0043') direction = 'right'; // Right arrow
  else if (key === '\u001B\u005B\u0044') direction = 'left';  // Left arrow
  else if (key === '\u0003') { // Ctrl+C to quit
    gameOver = true;
    rl.close();
  }
});


console.clear();
console.log('Use arrow keys to move the snake. Ctrl+C to quit.');
gameLoop();