const authService = require('../service/auth.service')


const registerUser = async (req, res) => {
    try {
        
        const user = await authService.register(req.body);
        res.status(201).json({message : 'User Registerd', user});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const loginUser = async (req, res)=>{

    try {
        
        const result = await authService.login(req.body);
        res.status(200).json({ message: "User Logged in", result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

module.exports = { registerUser, loginUser };