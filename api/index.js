const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const { error } = require("console");

mongoose.connect("mongodb+srv://das694272:krishnamonidas@cluster0.nm8gpsj.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
});


app.listen(port,()=>{
    console.log("Server is running on port 8000");
});



const User = require("../api/models/user");
const Order = require("../api/models/order");


const sendVerificationEmail = async (email, verficationToken) =>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"krishnamonidas.adtu@gmail.com",
            pass:"fcar nnky nrjt htig "
        }
    })
    const mailOptions={
        from:"google.com",
        to:email,
        subject:"Verify Email",
        text:`Click the following link to verify the mail http://localhost:8000/verify/${verficationToken}`,
    };
    try{
        await transporter.sendMail(mailOptions)
    }catch(error){
        console.log("Can not send verification Email ",error);
    }
}



app.post("/register",async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"This email is already registered with an account"});
        }

        const newUser = new User({name, email, password});
        newUser.verficationToken=crypto.randomBytes(20).toString("hex");
        await newUser.save();

        sendVerificationEmail(newUser.email,newUser.verficationToken)
    }catch{
        console.log("Oops! Error when registering ",error);
        res.status(500).json({message:"Your registration failed, try again after some time"})
    }
})


app.get("/verify/:token",async(req,res)=>{
    try{
        const token = req.params.token;
        const user=await User.findOne({verficationToken: token});
        if(!user){
            return res.status(404).json({message:"Bad verification token"});
        }
        user.verified=true;
        user.verficationToken=undefined;
        await user.save();

        res.status(200).json({message:"Email is verified"})
    }catch(error){
    res.status(500).json({ message:"Problem when verifying Email"});
}
})