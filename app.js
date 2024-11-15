if(process.env.NODE_ENV != "PRODUCTION"){
    require('dotenv').config();
      
};

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const profileSchema =require("./models/profileSchema");

const dbURL = process.env.MONGO_URL
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});


// Linking the database
main().then(() => {
    console.log("connected to mongoDB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

app.get("/",(req,res)=>{
    console.log(profileSchema);
  });