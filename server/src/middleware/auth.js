const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]

    jwt.verify(token, "secret-key", (err, result) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token!" })
        }
        req.userId = result.userId
        next()
    });
}

module.exports = verifyToken