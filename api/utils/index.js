const jwt = require("jsonwebtoken")
const Admin = require("../models/admin.model")

async function checkAuth (req, res, next){
    if (!req.headers.token) return res.status(401).send ("Admin not logged in")

    jwt.verify(req.headers.token, process.env.SECRET, async(err, decoded) => {
        if (err) return res.status(401).send("Token not valid")

        const admin = await Admin.findOne({ where: {email: decoded.email} })

        if (!admin) return res.status(401).send("Token not valid")
        else {
            res.locals.admin = admin
        }
        next()
    })
}

module.exports = { checkAuth }   