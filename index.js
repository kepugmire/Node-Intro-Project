const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders);

app.use(bodyParser.json());


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getlocation);
app.get('/occupations', mainCtrl.getoccupations);
app.get('/occupations/latest', mainCtrl.getoccupationslatest);
app.get('/hobbies', mainCtrl.gethobbies);
app.get('/hobbies/:type', mainCtrl.gethobbiestype);
app.get('/family', mainCtrl.getfamily);
app.get('/family/:gender', mainCtrl.getfamilygender);
app.get('/restaurants', mainCtrl.getrestaurants);
app.get('/restaurants/:name', mainCtrl.getrestaurantsname);


// app.put('/namechange', mainCtrl.namechange);
// app.put('/location', );
// app.put('/hobbies', );
// app.put('/occupations', );
// app.put('/family', );
// app.put('/restaurants', );


app.listen(3000, function () {
    console.log('Listening on 3000');
});