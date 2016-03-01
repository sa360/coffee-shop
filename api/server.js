var express 	= require('express');
var models	 	= require('./models');
var bodyParser  = require('body-parser');
var app 		= express();

try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));

//DEFINE ROUTES
var shop_routes = require('./routes/coffeeshop');

app.use('/shops',shop_routes);


models.sequelize.sync().then(function(){
	app.listen(env.port,function(){
		console.log('Listening on '+env.host+':'+env.port);
		console.log('Stop Server With CTRL + C');
	});
});


