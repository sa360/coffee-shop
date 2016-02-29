app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl($http,$location, $stateParams,api,shopSrv){
	var ctrl = this;
	ctrl.shopSrv = shopSrv;
	ctrl.$location = $location;
	ctrl.$http = $http;
	

	ctrl.ratings = [5, 4, 3, 2, 1];
	// ctrl.ratings = [
	// 	{value: 1, label: '1 star'},
	// 	{value: 2, label: '2 star'},
	// 	{value: 3, label: '3 star'},
	// 	{value: 4, label: '4 star'},
	// 	{value: 5, label: '5 star'}
	// ];

	ctrl.shop = {};
	ctrl.shop_update_btn = 'Update Shop';
	ctrl.shop_delete_btn = 'Remove Shop';

	if($stateParams.shopId){
		console.log($stateParams.shopId);
		ctrl.getShop($stateParams.shopId);


			for(var rating in ctrl.ratings){
				if(ctrl.shop.rating == ctrl.ratings[rating].value){
					ctrl.rating = ctrl.ratings[rating];
				}
			}
			// for(var category in ctrl.categories){
			// 	if(ctrl.product.category == ctrl.categories[category].value){
			// 		ctrl.category = ctrl.categories[category];
			// 	}
			// }
	}
	else{
		ctrl.getShops();
	}
	
	// if($stateParams.shopId != undefined){
	// 	shopSrv.getShop($stateParams.shopId)
	// 	.then(function(res){
	// 		console.log(res);
	// 		ctrl.shop = res.data.shop;

			// for(var rating in ctrl.ratings){
			// 	if(ctrl.shop.rating == ctrl.ratings[rating].value){
			// 		ctrl.rating = ctrl.ratings[rating];
			// 	}
			// }
	// 	})
	// }


}
ShopCtrl.prototype.getShops = function(){
	var ctrl = this;
		ctrl.$http.get('/shops').then(function(res) {
		ctrl.shops = res.data;
		console.log(ctrl.shops);
	})
}

ShopCtrl.prototype.getShop = function(shopId){
	var ctrl = this;
		ctrl.$http.get('/shops/'+shopId)
		.then(function(res) {
			ctrl.shop = res.data;

			// for(var rating in ctrl.ratings){
			// 	if(ctrl.shop.rating == ctrl.ratings[rating].value){
			// 		ctrl.rating = ctrl.ratings[rating].value;
			// 	}
			// }

			console.log(ctrl.shop);
		});
}
ShopCtrl.prototype.addShop = function(){
	var ctrl = this;

		var shop = {
			name: ctrl.name,
			address: ctrl.address,
			rating: ctrl.rating,

		}
		// console.log(shop);
		ctrl.shopSrv.addShop(shop);
	}

ShopCtrl.prototype.updateShop = function(){
	var ctrl = this;

		ctrl.shop_update_btn = "Updating";
		ctrl.shopSrv.updateShop(ctrl.shop, ctrl.shop.id)
		.then(function(res){
			ctrl.$location.path('/shop');
		})
	}

ShopCtrl.prototype.deleteShop = function(id){
	var ctrl = this;
	console.log(id);

	ctrl.shop_delete_btn = "Deleting";
	ctrl.shopSrv.deleteShop(id)
	.then(function(res) {
		console.log(res);
		ctrl.getShops();
		ctrl.shop_delete_btn = "Remove Shop";
	})
	
		
}

ShopCtrl.prototype.editShop = function(shop){
	var ctrl = this;
	ctrl.$location.path('editCoffeeShop/'+shop.id);
		//ctrl.$state.go('editCoffeeShop',{shopId:ctrl.shop._id});
}

