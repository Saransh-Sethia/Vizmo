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

module.exports = {register}