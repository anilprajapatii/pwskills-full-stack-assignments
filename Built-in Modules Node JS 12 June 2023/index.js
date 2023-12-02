// Q2

const fs = require("fs");

const data =
  "Node.js runs on Chrome's V8 JavaScript engine. it is used for backend development";

fs.writeFileSync("nodejs_architecture.txt", data);

// Q3

const readData = fs.readFileSync("nodejs_architecture.txt");

console.log(readData.toString());

// Q4

const newData =
  "Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. ";

fs.appendFileSync("nodejs_architecture.txt", newData);

const dataOfQ4 = fs.readFileSync("nodejs_architecture.txt");

console.log(dataOfQ4.toString());

// Q5


// fs.unlink("./nodejs_architecture.txt", () =>
//   console.log("File has been Deleted SuccessFully !")
// );

// Q6

const os = require("os");

console.log("Operating system name: " + os.type());

console.log("OS release : " + os.release());

