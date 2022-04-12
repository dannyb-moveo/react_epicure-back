/* ------------------------------ Restaurants ------------------------------ */
/**
 * @api {get} /restaurants Get all Restaurants
 * @apiName GetRestaurants
 * @apiGroup Restaurants
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} restaurants List of restaurants (Array of Objects).
 * @apiSuccess {Number} totalRestaurants Number of total restaurants.
 *
 * @apiSuccessExample Example data on success:
 * {
 *  "restaurants": [
        {
            "_id": "62319cb2c71217bf770f9b0d",
            "name": "Tiger Lilly",
            "image": "https://i.ibb.co/TmNKDSs/tiger-lili.png",
            "chef": {
                "_id": "62319bd95cde0ce3c7ea4e87",
                "name": "Yanir Green"
            },
            "createdAt": "2022-03-16T08:15:46.351Z",
            "updatedAt": "2022-03-22T13:12:18.896Z",
            "signatureDish": {
                "_id": "62319d1b97b1657a3b305ea8",
                "name": "Pad Ki Mao",
                "price": 88,
                "image": "https://i.ibb.co/JnPTs6X/rectangle.png",
                "ingredients": [
                    "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut"
                ],
                "tags": [
                    "spicy"
                ],
                "restaurant": "62319cb2c71217bf770f9b0d",
                "createdAt": "2022-03-16T08:17:31.087Z",
                "updatedAt": "2022-03-16T08:17:31.087Z",
            },
            "isPopular": true
        },
    ]
    "totalRestaurants": 1    
 * }
 */

/** 
 * @api {post} /restaurants Create a new Restaurant
 * @apiName PostRestaurants
 * @apiGroup Restaurants
 * @apiVersion 1.0.0
 *
 * @apiBody {String{..40}} name Name of the Restaurant
 * @apiBody {String} image Image of the Restaurant
 * @apiBody {String} chef unique <code>id</code> of Chef
 * @apiBody {String} [signatureDish=null] unique <code>id</code> of Dish (can be null)
 * @apiBody {Boolean} [isPopular=false] is the restaurant popular
 * 
 * @apiSuccess {Object} restaurant New Restaurant Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "restaurant": {
        "name": "BonBon",
        "image": "https://i.ibb.co/TmNKDSs/tiger-lili.png",
        "chef": "6240544d4536f9df96b42eab",
        "signatureDish": null,
        "isPopular": false,
        "_id": "62542c91c269eed48884ef90",
        "createdAt": "2022-04-11T13:26:41.246Z",
        "updatedAt": "2022-04-11T13:26:41.246Z",
    }
}
*/

/** 
 * @api {get} /restaurants/:id Get Single Restaurant
 * @apiName GetSingleRestaurant
 * @apiGroup Restaurants
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Restaurant's unique <code>id</code>

 * 
 * @apiSuccess {Object} restaurant Found Restaurant Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "restaurant": {
        "_id": "62542c91c269eed48884ef90",
        "name": "BonBon",
        "image": "https://i.ibb.co/TmNKDSs/tiger-lili.png",
        "chef": "6240544d4536f9df96b42eab",
        "signatureDish": null,
        "isPopular": false,
        "createdAt": "2022-04-11T13:26:41.246Z",
        "updatedAt": "2022-04-11T13:26:41.246Z",
    }
}
*/

/** 
 * @api {patch} /restaurants/:id Update Restaurant
 * @apiName UpdateRestaurant
 * @apiGroup Restaurants
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Restaurant's unique <code>id</code>
 * 
 * @apiBody {String{..40}} name Name of the Restaurant
 * @apiBody {String} image Image of the Restaurant
 * @apiBody {String} chef unique <code>id</code> of Chef
 * @apiBody {String} [signatureDish=null] unique <code>id</code> of Dish (can be null)
 * @apiBody {Boolean} [isPopular=false] is the restaurant popular
 * 
 * @apiSuccess {Object} restaurant Updated Restaurant Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "restaurant": {
        "_id": "62542c91c269eed48884ef90",
        "name": "BonBon",
        "image": "https://i.ibb.co/TmNKDSs/tiger-lili.png",
        "chef": "6240544d4536f9df96b42eab",
        "signatureDish": null,
        "isPopular": true,
        "createdAt": "2022-04-11T13:26:41.246Z",
        "updatedAt": "2022-04-11T13:32:25.702Z",
    }
}
*/

/** 
 * @api {delete} /restaurants/:id Delete Restaurant
 * @apiName DeleteRestaurant
 * @apiGroup Restaurants
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Restaurant's unique <code>id</code>
 * 
 * @apiSuccess {String} msg Success Message.
 *
 * @apiSuccessExample Example data on success:
 * {
    "msg": "Success! restaurant removed"
}
*/

/** 
 * @api {get} /restaurants/:id/dishes Get Restaurants Dishes
 * @apiName GetRestaurantsDishes
 * @apiGroup Restaurants
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Restaurant's unique <code>id</code>
 * 
 * @apiSuccess {Object[]} dishes List of restaurants dishes (Array of Objects).
 * @apiSuccess {Number} totalDishes Number of total restaurants dishes.
 *
 * @apiSuccessExample Example data on success:
 * {
    "dishes": [
        {
            "_id": "62319d1b97b1657a3b305ea9",
            "name": "Garbanzo Frito",
            "price": 98,
            "image": "https://i.ibb.co/whs3KG4/rectangle2.png",
            "ingredients": [
                "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa"
            ],
            "tags": [
                "vegan"
            ],
            "restaurant": "62319cb2c71217bf770f9b0e",
            "createdAt": "2022-03-16T08:17:31.087Z",
            "updatedAt": "2022-03-16T08:17:31.087Z",
        }
    ],
    "totalDishes": 1
}
*/
