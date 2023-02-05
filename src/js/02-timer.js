import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const sec = document.querySelector('span[data-seconds]');
const min = document.querySelector('span[data-minutes]');
const hour = document.querySelector('span[data-hours]');
const day = document.querySelector('span[data-days]');

startBtn.disabled = true;
startBtn.addEventListener('click', startCounting);

let plannedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    plannedDate = +selectedDates[0];
    if (plannedDate <= +Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
};

flatpickr(dateInput, options);

function startCounting() {
  startBtn.disabled = true;

  const timerIntervalId = setInterval(() => {
    const delta = plannedDate - Date.now();
    setTimeToSpan(convertMs(delta));

    if (delta < 1000) {
      clearInterval(timerIntervalId);
      return;
    }
  }, 1000);
}

function setTimeToSpan({ days, hours, minutes, seconds }) {
  sec.textContent = addLeadingZero(seconds);
  min.textContent = addLeadingZero(minutes);
  hour.textContent = addLeadingZero(hours);
  day.textContent = addLeadingZero(days);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
