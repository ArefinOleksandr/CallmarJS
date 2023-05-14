var express = require('express'),
passport = require('passport'),
localStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
var router = express.Router();
const Models = require('../modules/User');





router.get('/auth', function(req, res, next) {
  res.render('auth', {title: 'Auth'});

});

router.post('/auth', async (req, res) => {

  const loginUser = await Models.loginUser(req.body.email, req.body.password);
  console.log(loginUser)
  if(loginUser === null) {
    res.status(401).json({
      message: 'Пользователя не существует'
    })
  }
  else{
    const token = jwt.sign({
      email: loginUser.email,
      userId: loginUser.user_id

    }, 'dev-net', {expiresIn: 60 * 60});

    res
    .status(200)
    .json({
      token: token
    })
      
      

  }
})


router.get('/register', (req, res) => {
  res.render('register', {title: 'Express'});
})


router.post('/register', async (req, res) => {

  try {
    if(await (Models.findUserByEmail(req.body.email)).valueOf()){
      await Models.createUser(req.body);
      res.sendStatus(200);
    }
    else{
      res.sendStatus(409);
      
    }
  } catch (error) {
    console.log(error);
  }
})

router.delete('/', async (req, res) => {
  await Models.deleteUser();
  res.sendStatus(200);
})



module.exports = router;
