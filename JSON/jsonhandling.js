const fs=require('fs');

//Creating an OBJECT

const myData={
    name:"talha",
    city:"mandi bahauddin",
    agr:22
}


// Converting an obj to JSON 

// const jsonData=JSON.stringify(myData);
// console.log(jsonData)

// For imaging read data from other file and and converted into objected
//for that first creating new file

// fs.writeFile("jsonData.json",jsonData,(err)=>{
// console.log("file created")
// })


//Now reading the data from file 
fs.readFile("jsonData.json","utf-8",(err,data)=>{
console.log(data)
//Now converting data to json form to obj 
const orgData=JSON.parse(data)
console.log(orgData)
});