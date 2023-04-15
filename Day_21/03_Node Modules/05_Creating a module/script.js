const events = require("events");
const util = require("util");

let emitter = new events.EventEmitter();

emitter.on("veryFirstEvent", (user, data) => {
  util.log(`${user}: ${data}`);
});

emitter.emit("veryFirstEvent", "Nihil", "Hello world.");

process.stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    emitter.emit("veryFirstEvent", "Goodbye!", "process");
    process.exit();
  }

  emitter.emit("veryFirstEvent", "Terminal", data);
});
