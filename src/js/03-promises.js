import { Notify } from 'notiflix/build/notiflix-notify-aio';

const submitBtn = document.querySelector('button');
const delay = document.querySelector('input[name="delay"]');
const amount = document.querySelector('input[name="amount"]');
const step = document.querySelector('input[name="step"]');

submitBtn.addEventListener('click', promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();
  promiseCycle();
}

function promiseCycle() {
  let delayValue = +delay.value;
  const amountValue = +amount.value;
  const stepValue = +step.value;

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(resolve => {
        Notify.success(resolve);
      })
      .catch(reject => {
        Notify.failure(reject);
      });
    delayValue += stepValue;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
