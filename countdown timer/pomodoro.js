// grab parts of our HTML
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



  var pomodoro = {
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    init : function(){
      var self = this;
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#pomodoro').onclick = function(){
        self.startWork.apply(self);
      };

    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;  
    },
    startWork: function() {
      this.resetVariables(25, 0, true);
    },
   
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
      this.fillerHeight = 0;
    }
};
window.onload = function(){
  pomodoro.init();
};
