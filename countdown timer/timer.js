/ grab parts of our HTML
const countdownArea = document.querySelector('.countdown');
const numbersArea = document.querySelector('.numbers');
const resetBtn = document.querySelector('.reset');
const pomodoroBtn = document.querySelector('.pomodoro');

// create an interval and counter
let interval;
let count = 0;

// calculate the height of our numbers
const height = countdownArea.getBoundingClientRect().height;

// create the interval that creates the timer
function createTimer() {
        clearInterval(interval);
        count = 0;
        numbersArea.style.transform = 'translateY(0)'
        interval = setInterval(() => {
  
          // 1. increment our count
      count++;
  
      // 2. calculate the offset and apply it
      const offset = height * count;
  
          // 3. apply the offset using css transforms
      numbersArea.style.transform = `translateY(-${offset}px)`
  
      // 4. stop the interval at 10
      if (count >= 10) {
        // go to the next episode
        clearInterval(interval);
      }
    }, 1000);
  }

  createTimer();

  resetBtn.addEventListener('click', createTimer);
