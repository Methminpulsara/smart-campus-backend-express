const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const Student = require("../models/Student"); // <-- Add this line



const register = async ({ name, email, password, role }) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  // ✅ If role is student, auto create student record
  if (role === "student") {
    await Student.create({
      user: user._id,
      regNumber: "REG" + Date.now(), // Auto generated reg number
      faculty: "Engineering", // Optional: Replace with real input if needed
      department: "Computer Science" // Optional
    });
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role
  };
};


const login = async ({email, password})=>{

    const user = await User.findOne({email});
    if(!user){
        throw new Error("User not found");
    }
    const  isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error("Password is incorrect");
    }
    
    const token = jwt.sign({
        id:user._id, role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn : '7d'
    });

    return {
        token, 
        user: {
            id:user._id,
            name:user.name, 
            email:user.email,
            role:user.role
        }
    }


}

module.exports = {register,login};