const fs=require('fs');
const http=require('http');

//For reading an file
// fs.writeFile("stream.txt","my name is talha , i am from mandi bhauddin",(err)=>{
// console.log("file created")

// })


const server=http.createServer();
server.on("request",(req,res)=>{
        //Creating an readstream parallel
        const rstream=fs.createReadStream("stream.txt");

        //OLD method to stream
        // rstream.on('data',(chunkData)=>{
        //     res.write(chunkData);
        //     })
        //  res.on("end",()=>{
        //  res.end()
        //     })

        //Now only call pipe method
        rstream.pipe(res);

    });
   



server.listen(5000,"127.0.0.1",()=>{
    console.log("Listening on port 8000")
})