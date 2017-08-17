const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    checkForSession = require('./middlewares/checkForSession'),
    swag_controller = require('./controllers/swag_controller'),
    app = express(),
    port = 3000;

app.use(bodyParser.json());
app.use(session({
    secret: 'r3kt_shr3kt',
    resave: false,
    saveUninitialized: false
}));
app.use(checkForSession)

app.get('/api/swag', swag_controller.read)

app.listen(port, () => console.log(`Now docked on port number ${port}!`))