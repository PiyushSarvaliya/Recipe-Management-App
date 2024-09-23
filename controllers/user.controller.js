const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const wrapAsyc = require("../utils/wrapAsyc")

const signup = wrapAsyc(async(req , res) =>{
    const {username , email , password} = req.body
    const user = await User.findOne({email : email})

    if(!user){
        bcrypt.hash(password , 5 , async(err , hash)=>{
            let obj = {
                username : username,
                email : email,
                password : hash
            }

            let user = await User.create(obj)
            res.status(200).json(user)
        })
    }
    else{
        res.status(400).json({msg : "This email is already exists"})
    }
})



const login = wrapAsyc(async (req, res) => {
    const { email, password } = req.body;
    let data = await User.findOne({ email: email });
    if (data) {
      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ id: data._id }, "token");
          res.cookie("token", token).cookie("id", data._id);
          res.status(200).json({ message: "Successfully Login", data , token});
        } else {
          res.status(400).json({ message: "Password incorrect" });
        }
      });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  });
  


  module.exports = {signup , login}