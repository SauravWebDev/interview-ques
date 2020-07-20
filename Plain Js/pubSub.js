var pubSub = {
  subscribers: {},
  subscribe: function (event, callback) {
    let index;
    let subscribers = this.subscribers;
    if (!subscribers[event]) {
      subscribers[event] = [];
    }
    index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      },
    };
  },
  publish: function (event, data) {
    let subscribers = this.subscribers;
    if (!subscribers[event]) return;
    subscribers[event].forEach((subscriberCallback) =>
      subscriberCallback(data)
    );
  },
};

let subscription1 = pubSub.subscribe("event 1", (data) => {
  console.log(`"event 1", was published with this data: "${data.msg}"`);
});
let subscription2 = pubSub.subscribe("event 2", (data) => {
  console.log(`"event 2", was published with this data: "${data.msg}"`);
});

pubSub.publish("event 1", { msg: "event 1" });
pubSub.publish("event 2", { msg: "event 2" });
