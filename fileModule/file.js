const fs = require('fs')

//Sync
// fs.writeFileSync("./test.txt", "Hey there!")

//Async
// fs.writeFile("./test.txt", "Hii I am here", (err) => {});



//Sync
// const read = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(read);

//Async
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err)
//     }else{
//         console.log(result)
//     }
// })



// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt",`\n Hey there`);
// fs.appendFileSync("./test.txt", `${Date.now()}\n`);


//to copy
// fs.cpSync("./test.txt", "./copy.txt");



//to delete
// fs.unlinkSync("./test.txt");



//for status
// console.log(fs.statSync("./copy.txt"));
// console.log(fs.statSync("./copy.txt").isFile());



//to create new folder
// fs.mkdirSync("my-docs");
fs.mkdirSync("my-docs/a/b", {recursive: true});
