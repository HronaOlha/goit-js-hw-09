const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', handleColorChange);
stopBtn.addEventListener('click', handleStopColorChange);

function handleColorChange() {
  startBtn.disabled = true;
  if (stopBtn.disabled) {
    stopBtn.disabled = false;
  }

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleStopColorChange() {
  stopBtn.disabled = true;
  if (startBtn.disabled) {
    startBtn.disabled = false;
  }
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
