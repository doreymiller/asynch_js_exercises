const divRed = document.querySelector('#red');
const divGreen = document.querySelector('#green');
const divOrange = document.querySelector('#orange');
const divBlue = document.querySelector('#blue');

const tracker = function() {
  let events = [];

  return {
    list() {
      return events.slice(0);
    },

    clear() {
      events = [];
    },

    elements() {
      return events.map(event => event.target);
    },

    add(event) {
      events.push(event);
    }
  };
}();

function track(callback) {
  return event => {
    if (!tracker.list().includes(event)) tracker.add(event);
    callback(event);
  };
}

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

// console.log(tracker.list().length);
// // = 4
// console.log(tracker.elements());
// // = [div#blue, div#red, div#orange, div#green]
// console.log(tracker.elements()[0] === document.querySelector('#blue'));
// // = true
// console.log(tracker.elements()[3] === document.querySelector('#green'));
// // = true
// tracker.clear();
// // = 0
// console.log(tracker.list());
// // = []
// tracker.list()[0] = 'abc';
// console.log(tracker.list().length);
// = 0