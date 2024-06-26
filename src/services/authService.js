const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async(userData) => {
    try{
const existingUser = await User.findOne({email: userData.email});

if(existingUser){
    throw new Error('User Already Exists');
}

const user = new User(userData);
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(userData.password, salt);
user.password = hashedPassword;

await user.save();
return user;
    } catch(error){
        throw error;
    }
};

const login = async(userData) => {
    try{
        const {email, password} = userData;

        const user = await User.findOne({email});
        console.log(user)

        if(!user){
             throw new error("User is not found");
        };

        const isMatch = await user.comparePassword(password);
        console.log('isMatched', isMatch)
        

        if(!isMatch){
             throw new Error("Invalid Credentials");
        };

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
        return {token, user}

        //password check

   }catch(error){
        throw error
    }
}

module.exports = {register, login}