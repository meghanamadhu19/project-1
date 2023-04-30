const os = require('os');

// Platform , windows or mac
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime, amount of time your system has been up
console.log(os.uptime());// number of seconds