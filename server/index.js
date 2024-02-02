const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {
    if(req.send === "/favicon.ico") return res.end();
    const log = `${Date.now()} : ${req.url} : New Req recieved\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err, data) => {
        switch(myUrl.pathname){
            case '/':
                res.end("Home Page")
                break;

            case '/about':
                const username = myUrl.query.name;
            res.end(`Hi ${username}`)
            break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Hey are you there for results ${search}`);
                break;
                
             default:
                res.end("404 not found");
        }
        // res.end("Hello from server again");
    })
})

myServer.listen(3000, () => console.log('Server started'))