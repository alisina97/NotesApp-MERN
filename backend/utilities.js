const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const headers = req.headers["authorizations"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS-TOKEN-SECRET, (err, user) => {
        if (err) return res.sendStatus(401);
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
}