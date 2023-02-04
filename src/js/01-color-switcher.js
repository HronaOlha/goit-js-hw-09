const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', handleColorChange);
stopBtn.addEventListener('click', handleStopColorChange);

function handleColorChange() {
  startBtn.setAttribute('disabled', true);
  if (stopBtn.hasAttribute('disabled')) {
    stopBtn.removeAttribute('disabled');
  }

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleStopColorChange() {
  stopBtn.setAttribute('disabled', true);
  if (startBtn.hasAttribute('disabled')) {
    startBtn.removeAttribute('disabled');
  }
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
