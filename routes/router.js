const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

// router para las vistas
router.get('/', authController.isAutenticated, (req, res) => {
    res.render('index', { user: req.user });
})
router.get('/login', (req, res) => {
    res.render('login', { alert: false });
})
router.get('/register', (req, res) => {
    res.render('register');
})

// router para los methodos del controller
router.post('/register', authController.registrer)
router.post('/login', authController.login)
router.get('/logout', authController.logout)




module.exports = router