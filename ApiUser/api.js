const fs =require('fs');
const http=require('http');

//Creating an obj
const orgData={
    name:'Arshad Mehmood',
    city:'mandi-Bahauddin',
    age:45
}

//Conveted into json format
const jsonData=JSON.stringify(orgData);

//creating file 
// fs.writeFile("api.json",jsonData,(err)=>{
// console.log("file Created")
// })

//Reading the file 
const readingData=fs.readFileSync("api.json",'utf-8')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("This is an home page")
    }
    else if(req.url==='/api')
    {
        //show data on server
        res.end(readingData)
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("404.page not found");
    }



})



server.listen(9000,"127.0.0.1",()=>{
    console.log("listening on port 9000")
})