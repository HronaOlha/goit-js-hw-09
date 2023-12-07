# goit-js-hw-09

## Tasks

### 1.Task 1 Color switch

Write a script that, after pressing the "Start" button, changes the background color of <body> to a random value once per second, using an inline style. By pressing the "Stop" button, the background color should stop.

To generate a random color, use the getRandomHexColor function.
```javascript
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
```

### 2.Task 2 Countdown timer

Write a timer script that counts down to a certain date. Such a timer can be used in blogs and online stores, event registration pages, during maintenance, etc.

Use the flatpickr library to allow the user to cross-browser select an end date and time in a single interface element. 

### 3.Task 3 A promise generator

The HTML contains the markup of the form, in the fields of which the user will enter the first delay in milliseconds, the increment of the delay for each promise after the first, and the number of promises to be created.

Write a script that, at the time of submitting the form, calls the createPromise(position, delay) function as many times as entered in the amount field. During each call, pass it the number of the position being created and the delay, taking into account the first delay entered by the user and the step.
```javascript
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

