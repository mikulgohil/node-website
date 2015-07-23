var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages')

app.locals.pageTitle = "Global Page title ";

app.get('/',routes.index);
app.get('/about',routes.about);

app.use(function(req, res){
       res.send("404");
});

var port    =   process.env.PORT || 3000;
app.listen(port);
console.log('Magic happens on port ' + port);