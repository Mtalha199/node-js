
const http=require('http')
// console.log(http);
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("hello this data is from node")
    }
    else if(req.url==='/about')
    {
        res.end('HIII ,this data is from about')
    }
    else
    {
        res.writeHead(404);
        res.end("404.Page not founnd")
    }

})

server.listen(8000,"127.0.0.1",()=>{
console.log("Listening on port 8000");
}
)