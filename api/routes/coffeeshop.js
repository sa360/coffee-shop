var express 	= require('express');
var models	 	= require('./../models');
var router 		= express.Router();

//endpoint:  http://localhost:8080/shops
router.get('/',function(req,res){
	models.coffeeshop.findAll().then(function(shops){
		res.json(shops);
		console.log(shops);
	})
})

router.get('/:shopId',function(req,res){
	var where = {where:{id:req.params.shopId}}
	models.coffeeshop.find(where).then(function(shop){
		res.json(shop);
		console.log(shop);
	})
})

//Add a new shop
//endpoint:  http://localhost:8080/shops
router.post('/',function(req,res){
	var newCoffeeShop = req.body;
	models.coffeeshop.create(newCoffeeShop).then(function(shops){
		res.json(shops);
		console.log(shops);
	})
})

//update a new shop
router.put('/:shopId',function(req,res){
	var where = {where:{id:req.params.shopId}}
	var __shop = req.body;

	models.coffeeshop.find(where).then(function(shop){
		shop.updateAttributes({
			name 		: __shop.name,
			address  	: __shop.address,
			rating 		: __shop.rating,
		});

		__shop.id = shop.id
		res.json(__shop);
		console.log(__shop);
	});
})

router.delete('/:shopId',function(req,res){
	var where = {where:{id:req.params.shopId}}
	models.coffeeshop.find(where).then(function(shop){
		shop.destroy();
		res.json({
			deleted:true
			shops
		});
	});
});

module.exports = router;