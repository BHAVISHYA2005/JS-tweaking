const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function formatTime(date) {
  return date.toTimeString().slice(0, 8);
}

console.clear();

function updateClock() {
  const now = new Date();
  const timeString = formatTime(now);
  
  readline.cursorTo(rl.output, 0, 0);
  readline.clearLine(rl.output, 0);
  rl.output.write(timeString);
}

setInterval(updateClock, 1000);

rl.on('SIGINT', () => {
  console.log('\nExiting clock...');
  process.exit();
});