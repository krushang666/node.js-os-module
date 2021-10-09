
const os = require("os")
console.log("OS CPU architecture: " + os.arch());
console.log("Free memory of the system: " + (os.freemem() / (Math.pow(1024,3))) + "GB");
console.log("Total memory of the system: " + (os.totalmem() / (Math.pow(1024,3))) + "GB");
console.log("OS Platform: " + os.platform());
console.log("Information about the current user: ");
console.log("Username: "  + os.userInfo("utf-8").username);
console.log("Home directory: "  + os.userInfo("utf-8").homedir);
