const express = require('express')
const cors = require('cors')
const session = require('express-session');
const db = require("./models");


const app = express()

// middleware

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/Router.js')
const {where} = require("sequelize");
app.use('/api', router)

// Set up the session middleware
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 60 * 60 * 1000 // 1 hour
    }
  }));

const User = db.user;
// Login route
app.post('/login', async (req, res) => {
    let info = {
      username: req.body.username,
      password: req.body.password,
    };

    // Check if the user exists
    const user = await User.findOne({ where : { username: info.username }});

    // If the user exists, check if the password is correct
    if (user && user.password === info.password) {
      // Login the user
      res.status(200).json({
        success: true,
        role: user.role,
      });
      req.session.user = user;
    } else {
      // The user does not exist or the password is incorrect
      res.status(401).json({ success: false });
    }
  });

// now you can access session
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});

//static Images Folder

// app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})