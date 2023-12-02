const http = require("http");
const EventEmitter = require("events");
// Q7 

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      "<h1> Creating Server ! </h1>"
    );
  }
  res.end();
});

server.listen(5000);
console.log(`Server is running on port 5000`);

// Q8

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "Anil's Quest !");

// Q9
const subscribeMessage2 = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage2);

console.log("Calling the event listner before removing it.");
eventEmitter.emit("subscribe", "Anil's Quest !");

console.log("Calling the event listner after removing it.");
eventEmitter.removeListener("subscribe", subscribeMessage2);

eventEmitter.emit("subscribe", "Anil's Quest !");

// Q10

const subscribeMessage3 = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
  };
  
  eventEmitter.addListener("subscribe", subscribeMessage3);
  
  eventEmitter.emit("subscribe", "Anil's Quest !");
  
  console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
  
  eventEmitter.setMaxListeners(5);
  
  console.log(
    `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );