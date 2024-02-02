const path = require('path')

console.log(path.dirname("C:/Users/Acer/Desktop/Internship/Node/CoreModules/pathModule/path.js"));

console.log(path.extname("C:/Users/Acer/Desktop/Internship/Node/CoreModules/pathModule/path.js"));

console.log(path.basename("C:/Users/Acer/Desktop/Internship/Node/CoreModules/pathModule/path.js"));

const myPath = console.log(path.parse("C:/Users/Acer/Desktop/Internship/Node/CoreModules/pathModule/path.js"));
//console.log(myPath.name);
console.log(myPath.root);