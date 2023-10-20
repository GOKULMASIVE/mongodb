const [, , ...a] = process.argv;
let s = 0;
const sum = (...n) => n.map((v) => (s += parseInt(v)));
console.log(sum(...a));

const { log } = require("console");
// console.log(document);
// console.log(global);

const os = require("os");
console.log("memory", os.freemem() / 1024 / 1024 / 1024);
console.log("total memory", os.totalmem / 1024 / 1024 / 1024);
console.log("version", os.version());
console.log("processor", os.cpus());
log("hello")
console.log(console);