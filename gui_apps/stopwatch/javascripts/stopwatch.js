const stopWatch = {

  toggleTimer(e) {
    e.preventDefault();

    if (this.currentTimer) {
      this.currentTimer = clearInterval(this.currentTimer);
      this.startStop.innerHTML = "Start";
    } else {
      this.startStop.innerHTML = "Stop";
      this.startTimer();
    }
  },

  startTimer() {
    this.currentTimer = setInterval(this.updateClock.bind(this), 10);
  },

  resetTimer(e) {
    e.preventDefault();
    this.currentTimer = clearInterval(this.currentTimer);
    this.resetClock();
    this.updateClockContent();
  },

  resetClock() {
    this.numCsec = 0;
    this.numSec = 0;
    this.numMin = 0;
    this.numHrs = 0;
  },

  updateClock() {
    this.numCsec += 1;
    if (this.numCsec === 100) {
      this.numSec += 1;
      this.numCsec = 0;
    }
    if (this.numSec === 100) {
      this.numMin += 1;
      this.numSec = 0;
    }
    if (this.numMin === 100) {
      this.numHrs += 1;
      this.numMin = 0;
    }

    this.updateClockContent();
  },

  updateClockContent() {
    this.hrs.textContent = this.numHrs < 10 ? '0' + this.numHrs : String(this.numHrs);
    this.min.textContent = this.numMin < 10 ? '0' + this.numMin : String(this.numMin);
    this.sec.textContent = this.numSec < 10 ? '0' + this.numSec : String(this.numSec);
    this.csec.textContent = this.numCsec < 10 ? '0' + this.numCsec : String(this.numCsec);
  },

  bind() {
    this.startStop.addEventListener("click", e => this.toggleTimer(e));
    this.reset.addEventListener("click", e => this.resetTimer(e));
  },

  init() {
    let clock = document.querySelector("#clock");
    this.hrs = clock.querySelector("#hours");
    this.min = clock.querySelector("#minutes");
    this.sec = clock.querySelector("#seconds");
    this.csec = clock.querySelector("#centiseconds");

    this.resetClock();

    this.startStop = document.querySelector("#start");
    this.reset = document.querySelector("#reset");
    this.bind();
  }

};

document.addEventListener("DOMContentLoaded", e => {
  stopWatch.init();
});