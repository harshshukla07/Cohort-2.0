const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if(!token){
        return res.json({
            message: "no token provided in header"
        })
    }
    const words = token.split(" ");
    const jwtToken = words[1];
    try{const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.username){
        req.username = decodedValue.username;
        next();
    }
    else{
        res.status(403).json({
            message: "You are not authenticated"
        })
    }}
    catch(error){
        return res.status(403).json({
            message: "invalid or expired token"
        });
    }
    // If the user is authenticated, call next()
    // If not, return a 403 status with an error message
}

module.exports = userMiddleware;