const AdminModel = require('../models/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


function signup(req, res) {
    const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
    AdminModel
    .create({
      userName: req.body.userName,
      name: req.body.name,
      email: req.body.email,
      password: hashed_pwd,
    })
    .then((admin) => {
        const admin_data = { userName: admin.userName, name:admin.name, email: admin.email }
        const token = jwt.sign(
            admin_data,
            process.env.SECRET,
            { expiresIn: '1h' }
          )
     
          return res.status(200).json({ token: token, ...admin_data })
        })
    // res.status(200).send("Está toh correcto")
    .catch((err) => res.status(403).json({ error: err.message }))
}
	
function login(req, res) {
    AdminModel
    .findOne({ where: { email: req.body.email } })
    .then(admin => {
      if (!admin) return res.json({ error: 'wrong email' })
 
      bcrypt.compare(req.body.password, admin.password, (err, result) => {
        if (!result) {
          return res.json({ error: `wrong password for ${req.body.email}`})
        }
        const admin_data = { userName: admin.userName, name: admin.name, email: admin.email }
 
        const token = jwt.sign(
            admin_data,
          process.env.SECRET,
          { expiresIn: '1h' }
        )
 
        return res.json({ token: token, ...admin_data })
      })
    })
    .catch(err => handleError(err, res))
}

module.exports = { signup , login }