var express 	= require('express');
var models	 	= require('./models');
var bodyParser  = require('body-parser');
var app 		= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));

//DEFINE ROUTES
var shop_routes = require('./routes/coffeeshop');

app.use('/shops',shop_routes);


models.sequelize.sync().then(function(){
	app.listen(80,function(){
		console.log('Listening on http://localhost:80');
		console.log('Stop Server With CTRL + C');
	});
});
