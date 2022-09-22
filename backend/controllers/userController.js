// register user
// route POST /api/users
// access Public 
const registerUser = (req, res) => {
    res.json({message: "Register user"})
}

// authenticate a user
// route POST /api/users/login
// access Public 
const loginUser = (req, res) => {
    res.json({message: "Login user"})
}

// get user data
// route GET /api/users/me
// access Public 
const getMe = (req, res) => {
    res.json({message: "user data display"})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}