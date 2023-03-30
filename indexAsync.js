const fs=require('fs');


//For creating an file use must have write to callback function
fs.writeFile("data.txt","Now i am handling Async",(err)=>{
console.log("File created and data successfully entered");
});


//For concatinate the data 
fs.appendFile("data.txt","Now i am appending data in the same file",(err)=>{
    console.log("append the data ")
})

//For reading the data 
fs.readFile("data.txt","UTF-8",(err,data)=>{
 console.log(data);
})

// For rename the file name
fs.rename("data.txt","newData.txt",()=>{
        console.log("Rename file")
})

//For deletion 
// fs.unlink("newData.txt",()=>{
//     console.log("file Deletd")
// })
