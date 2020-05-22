const router = require('express').Router();

router.get('/',(req, res)=> {
    res.render('index');
});

router.get('/start',(req, res)=> {
    res.render('start');
});

router.get('/male',(req, res)=> {
    res.render('male');
});

router.get('/female',(req, res)=> {
    res.render('female');
});

router.get('/male-gym',(req, res)=> {
    res.render('male-gym');
});

router.get('/male-fitness',(req, res)=> {
    res.render('male-fitness');
});

router.get('/male-yoga',(req, res)=> {
    res.render('male-yoga');
});

router.get('/female-gym',(req, res)=> {
    res.render('female-gym');
});

router.get('/female-fitness',(req, res)=> {
    res.render('female-fitness');
});

router.get('/female-yoga',(req, res)=> {
    res.render('female-yoga');
});

router.get('/profile',(req, res)=> {
    res.render('profile');
});

router.get('/measurement',(req, res)=> {
    res.render('measurement');
});

router.get('/setting',(req, res)=> {
    res.render('setting');
});

router.get('/workouts',(req, res)=> {
    res.render('workouts');
});

router.get('/login',(req, res)=> {
    res.render('login');
});

router.get('/login-success',(req, res)=> {
    res.render('login-success');
});

router.get('/signup',(req, res)=> {
    res.render('signup');
});

router.get('/signup-success',(req, res)=> {
    res.render('signup-success');
});

module.exports = router;