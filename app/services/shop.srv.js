app.service('shopSrv',ShopService);

function ShopService($location, $state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.shops = [];
	this.$location = $location;
}

ShopService.prototype.getShops = function(){
	var _this = this;
	return this.api.request('/shops',{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.shopSrv = res.data.shops;
		return res.data.shops;
	},function(res){
		//error promise
		console.log(res);
		return;
	})
}

ShopService.prototype.addShop = function(shop){
	var _this = this;
	console.log(shop);
	this.api.request('/shops',shop,'POST')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			//shop was added successfully
			_this.shops.push(res.data.shop);
			_this.state.go('shop');

		}
	})
}

ShopService.prototype.updateShop = function(shop,shopId){
	var _this = this;
	console.log(shop);
	return this.api.request('/shops/'+shopId,shop,'PUT');
}

ShopService.prototype.deleteShop = function(shopId){
	var _this = this;
	return this.api.request('/shops/'+shopId,{},'DEL');
}

ShopService.prototype.getShop = function(shopId){
	var _this = this
	return this.api.request('/shops/'+shopId,{},'GET');
}

ShopService.prototype.updateShopList = function(shop,shopId){
	for(index in this.shops){
		if(this.shops[index]._id == shopId){
			this.shops[index].name = shop.name;
			this.shops[index].address = shop.address;
			this.shops[index].rating = shop.rating;
		}
	}
}

ShopService.prototype.removeShop = function(shopId){

	for(var i =0;i<this.shops.length;i++){
		if(this.shops[i]._id = shopId){
			splice
		}
	}



	// for(shop in this.shops){
	// 	if(shop._id == shopId){
	// 		delete shop;
	// 	}
	// }
}