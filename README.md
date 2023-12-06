# goit-js-hw-09

## Tasks

### 1.Task 1 Color switch

Perform this task in the files 01-color-switcher.html and 01-color-switcher.js. Watch a demo video of the switch.

HTML contains Start and Stop buttons.
```html
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```

Write a script that, after pressing the "Start" button, changes the background color of <body> to a random value once per second, using an inline style. By pressing the "Stop" button, the background color should stop.

To generate a random color, use the getRandomHexColor function.
```javascript
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
```

### 2.Task 2 Countdown timer

Perform this task in the files 02-timer.html and 02-timer.js. Write a timer script that counts down to a certain date. Such a timer can be used in blogs and online stores, event registration pages, during maintenance, etc. Watch a demo video of the timer.

#### Interface elements
The HTML contains ready-made timer markup, end date selection fields, and a button that should be clicked to start the timer. Add minimal design of interface elements.
```html
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
   <div class="field">
     <span class="value" data-days>00</span>
     <span class="label">Days</span>
   </div>
   <div class="field">
     <span class="value" data-hours>00</span>
     <span class="label">Hours</span>
   </div>
   <div class="field">
     <span class="value" data-minutes>00</span>
     <span class="label">Minutes</span>
   </div>
   <div class="field">
     <span class="value" data-seconds>00</span>
     <span class="label">Seconds</span>
   </div>
</div>
```

#### Flatpickr library

Use the flatpickr library to allow the user to cross-browser select an end date and time in a single interface element. In order to connect the CSS code of the library to the project, it is necessary to add one more import, in addition to the one described in the documentation.
```javascript
// Described in the documentation
import flatpickr from "flatpickr";
// Additional import of styles
import "flatpickr/dist/flatpickr.min.css";
```

The library expects to be initialized on the input[type="text"] element, so we added an input#datetime-picker field to the HTML document.
```javascript
<input type="text" id="datetime-picker" />
```

The second argument of the flatpickr(selector, options) function can be passed an optional options object. We have prepared for you an object that is needed to complete the task. Find out what each property does in the Options documentation and use it in your code.
```javascript
const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
     console.log(selectedDates[0]);
   },
};
```

#### Date selection

The onClose() method from the parameters object is called every time an interface element created by flatpickr is closed. It is in it that the date selected by the user should be processed. The selectedDates parameter is an array of selected dates, so we take the first element.

- If the user has chosen a date in the past, show window.alert() with the text "Please choose a date in the future".
- If the user has selected a valid date (in the future), the "Start" button becomes active.
- The "Start" button should be inactive until the user selects a date in the future.
- By clicking on the "Start" button, the countdown to the selected date begins from the moment of clicking.

#### Countdown
By pressing the "Start" button, the script should calculate once per second how much time is left until the specified date and update the timer interface, showing four numbers: days, hours, minutes and seconds in the format xx:xx:xx:xx.

- The number of days can be more than two digits.
- The timer should stop when it reaches the end date, ie 00:00:00:00.
  
To calculate the values, use the ready-made convertMs function, where ms is the difference between the final and current date in milliseconds.
```javascript
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```

#### Time formatting
The convertMs() function returns an object with the calculated time remaining until the end date. Note that it does not format the result. That is, if there are 4 minutes or any other component of time left, the function will return 4, not 04. In the timer interface, you need to add 0 if the number is less than two characters. Write a function addLeadingZero(value) that uses the padStart() method and formats the value before rendering the interface.

#### Message library
The following functionality is not required for passing the assignment, but will be good additional practice.

To display messages to the user, instead of window.alert(), use the notiflix library.

### 3.Task 3 A promise generator

Perform this task in the files 03-promises.html and 03-promises.js. Watch a demo video of the promise generator.

The HTML contains the markup of the form, in the fields of which the user will enter the first delay in milliseconds, the increment of the delay for each promise after the first, and the number of promises to be created.
```html
<form class="form">
   <label>
     First delay (ms)
     <input type="number" name="delay" required />
   </label>
   <label>
     Delay step (ms)
     <input type="number" name="step" required />
   </label>
   <label>
     Amount
     <input type="number" name="amount" required />
   </label>
   <button type="submit">Create promises</button>
</form>

Write a script that, at the time of submitting the form, calls the createPromise(position, delay) function as many times as entered in the amount field. During each call, pass it the number of the position being created and the delay, taking into account the first delay entered by the user and the step.

function createPromise(position, delay) {
   const shouldResolve = Math.random() > 0.3;
   if (shouldResolve) {
     // Fulfill
   } else {
     // Reject
   }
}
```
Add code to the createPromise function so that it returns a single promise that is fulfilled or rejected due to a time delay. The value of the promise must be an object in which there will be the position and delay properties with the values of the parameters of the same name. Use the initial code of the function to choose what to do with the promise - fulfill or reject.
```javascript
createPromise(2, 1500)
   .then(({ position, delay }) => {
     console.log(` ✅ Fulfilled promise ${position} in ${delay}ms`);
   })
   .catch(({ position, delay }) => {
     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
   });
```
