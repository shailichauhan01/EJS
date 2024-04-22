const mongoose = require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
    from:"Neha",
    to:"Priya",
    msg:"Send me your exam sheets",
    created_at: new Date()  //Constructor for new Date
    },
    {
    from:"Rohit",
    to:"Mohit",
    msg:"Teach me JS callbacks",
    created_at: new Date() 
    },
    {
    from:"amit",
    to:"sumit",
    msg:"All the Best",
    created_at: new Date()  
    },
    {
    from:"Anita",
    to:"Ramesh",
    msg:"Bring me some fruits",
    created_at: new Date()  
    },
];

Chat.insertMany(allChats);
