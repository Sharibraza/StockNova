const Users = require("../models/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// Signup
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await Users.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: "lax",   // or "none" if using HTTPS and cross-site
      secure: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

// Login
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await Users.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next();
  } catch (error) {
    console.error(error);
  }
}