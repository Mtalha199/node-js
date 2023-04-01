//Requiring an class of events
const EventEmitter=require('events');

//creating an obj of class by using new keyword
const event=new EventEmitter();

//defining the event
event.on("saymyname",()=>{
    console.log("my name is talha")
})
//also calling with same name
event.on("saymyname",()=>{
    console.log("my name is Tarar")
})
event.on("saymyname",()=>{
    console.log("my name is sab")
})

//calling the event 
event.emit("saymyname")




event.on("detailOfWebsite",(status,detail)=>{
 console.log(`Website status is ${status} and website is ${detail}`)
})

// calling event with callback parameter
event.emit("detailOfWebsite",200,"behtreen kam a ")