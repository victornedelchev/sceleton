const router = require('express').Router();
const userService = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, rePassword } = req.body;

    // if (password !== rePassword) {
    //     throw new Error('Password mismatch!');
    // }

    await userService.register({ firstName, lastName, email, password, rePassword });

    res.redirect('/users/login');
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);

    res.cookie('token', token, { httpOnly: true });
    
    res.redirect('/');
});

// TODO: provide logout endpoint

module.exports = router;