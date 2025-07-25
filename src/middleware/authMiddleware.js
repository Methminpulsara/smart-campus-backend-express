const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res , next)=>{

    let token;

    if(req.headers.authorization?.startWith('Bearer')){
        try {
            
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password")
            next();

        } catch (error) {

            return res.status(401).json({msg: "Not authorized, no token"})

        }
    }else{
        res.status(401).json({ msg: "Not authorized, no token provided" });
    }
}


const  authorizeRoles = (...role)=>{
    return (req, res)=>{
        if(!role.includes(req.user.role)){
            return res.status(403).json({ msg: "Forbidden" });
        }
        next();
    }
}

module.exports = { protect, authorizeRoles };