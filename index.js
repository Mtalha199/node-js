const fs=require("fs");

//Creating File
fs.writeFileSync("read.txt","hello my name is talha first time i work in node");

//When create another with same name its replaced
fs.writeFileSync("read.txt" , "I create new file");

//combined the diffrent data
fs.appendFileSync("read.txt", "   also write this ")

//For reading a file
const bufData=fs.readFileSync("read.txt");
console.log(bufData);

//Nodejs contain a new thing "buffer" javascript browser does not contain 
//it contain a binary data as shown in below

{/* <Buffer 49 20 63 72 65 61 74 65 20 6e 65 77 20 66 69 6c 65 20 20 20 20 20 61 6c 73 6f 20 77 72 69 74 65 20 74 68 69 73 20 20 20 20 20 20 61 6c 73 6f 20 77 72 ...  */}
// 9 more bytes>

//For conversion 
const orgData=bufData.toString();
console.log(orgData);

//To rename the file 
fs.renameSync("read.txt","readWrite.txt")
