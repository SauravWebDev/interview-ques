function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(eventname, cb) {
  if (this.events[eventname]) {
    this.events[eventname].push(cb);
  } else {
    this.events[eventname] = [cb];
  }
};

EventEmitter.prototype.trigger = function(eventname, ...rest) {
  if (this.events[eventname]) {
    this.events[eventname].forEach(cb => {
      cb.call(null, rest);
    });
  }
};

const button = new EventEmitter();

button.on("click", params => {
  console.log("click handler ", params);
});

button.on("hover", params => {
  console.log("hover handler ", params);
});

button.trigger("click", "saurav singh", "24");
button.trigger("hover", "saurav singh", "24");

const label = new EventEmitter();
label.on("click", params => {
  console.log("label handler ", params);
});
label.trigger("click", "saurav singh", "24");
