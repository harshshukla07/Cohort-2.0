// Middleware for handling auth
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');    

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if(!token){
        return res.status(403).json({
            msg: "No token provided"
        });
    }
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
        if(decodedValue.username){
            req.username = decodedValue.username;
            next();

        }

    }
    catch(err){
        return res.status(403).json({
            msg: "You are not authenticated"
        });
    }

}
// Middleware for handling admin authentication
// This middleware checks if the request contains a valid JWT token in the Authorization header.
// If the token is valid, it extracts the username from the token and attaches it to the request object.
// If the token is invalid or not present, it responds with a 403 status code
// and an error message indicating that the user is not authenticated.
// The JWT_SECRET is used to verify the token, and it should be defined in the config

module.exports = adminMiddleware;