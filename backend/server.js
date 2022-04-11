const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = '8081';

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const apiRoutes = require('./routes/routes')(app);

mongoose.connect('mongodb://localhost:27017/bremo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(PORT, () => {
        console.clear()
        console.log("The Brain Memo - Bremo");
    })
});


app.use('/static/', express.static(__dirname + '/public/build/static/'));
app.use('/css/', express.static(__dirname + '/public/build/css/'));
app.use('/webfonts/', express.static(__dirname + '/public/build/webfonts/'));
app.use('/bremo-logo.png', express.static(__dirname + '/public/build/bremo-logo.png'))
