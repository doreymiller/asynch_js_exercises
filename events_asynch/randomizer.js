function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(callbacks) {
  // Your code here.
  callbacks = [...arguments];
  
  const totalTime = 2000 * callbacks.length;
  let secondsElapsed = 0;

  const timeLogger = setInterval(() => {
    console.log(secondsElapsed);
    secondsElapsed += 1;
  }, 1000);

  const endTime = setTimeout(() => {
    clearInterval(timeLogger);
  }, totalTime);

  for (let idx = 0; idx < callbacks.length; idx += 1) {
    setTimeout(callbacks[idx], Math.floor(Math.random() * totalTime));
  }
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6