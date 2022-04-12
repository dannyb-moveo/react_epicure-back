/* ------------------------------ Chefs ------------------------------ */
/**
 * @api {get} /chefs Get all Chefs
 * @apiName GetChefs
 * @apiGroup Chefs
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} chefs List of chefs (Array of Objects).
 * @apiSuccess {Number} totalChefs Number of total chefs.
 *
 * @apiSuccessExample Example data on success:
 * {
 *  "chefs": [
        {
            "_id": "62319bd95cde0ce3c7ea4e86",
            "name": "Meir Adoni",
            "image": "https://epicure-bucket-db.s3.amazonaws.com/e4c22293c7619b969b518ca3e20004af.png",
            "description": "Icing jelly beans candy muffin cupcake candy. Lollipop toffee topping cheesecake liquorice dragée biscuit pie. Lemon drops powder pastry pastry brownie.",
            "createdAt": "2022-03-16T08:12:09.548Z",
            "updatedAt": "2022-04-10T13:19:51.421Z",
            "isChefOfTheWeek": true
        },
    ]
    "totalChefs": 1    
 * }
 */

/** 
 * @api {post} /chefs Create a new Chef
 * @apiName PostChefs
 * @apiGroup Chefs
 * @apiVersion 1.0.0
 *
 * @apiBody {String{..50}} name Name of the Chef
 * @apiBody {String} image Image of the Chef
 * @apiBody {String} description Description of the Chef
 * @apiBody {Boolean} [isChefOfTheWeek=false] Is Chef of the week
 * 
 * @apiSuccess {Object} chef New Chef Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "chef": {
        "name": "Danny",
        "image": "https://epicure-bucket-db.s3.amazonaws.com/e4c22293c7619b969b518ca3e20004af.png",
        "description": "best chef",
        "isChefOfTheWeek": false,
        "_id": "62541c37c269eed48884ef87",
        "createdAt": "2022-04-11T12:16:55.442Z",
        "updatedAt": "2022-04-11T12:16:55.442Z",
    }
}
*/

/** 
 * @api {get} /chefs/:id Get Single Chef
 * @apiName GetSingleChef
 * @apiGroup Chefs
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Chef's unique <code>id</code>

 * 
 * @apiSuccess {Object} chef Found Chef Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "chef": {
        "name": "Danny",
        "image": "https://epicure-bucket-db.s3.amazonaws.com/e4c22293c7619b969b518ca3e20004af.png",
        "description": "best chef",
        "isChefOfTheWeek": false,
        "_id": "62541c37c269eed48884ef87",
        "createdAt": "2022-04-11T12:16:55.442Z",
        "updatedAt": "2022-04-11T12:16:55.442Z",
    }
}
*/

/** 
 * @api {patch} /chefs/:id Update Chef
 * @apiName UpdateChef
 * @apiGroup Chefs
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Chef's unique <code>id</code>
 * 
 * @apiBody {String{..50}} name Name of the Chef
 * @apiBody {String} image Image of the Chef
 * @apiBody {String} description Description of the Chef
 * @apiBody {Boolean} [isChefOfTheWeek=false] Is Chef of the week
 * 
 * @apiSuccess {Object} chef Updated Chef Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "chef": {
        "name": "Danny",
        "image": "https://epicure-bucket-db.s3.amazonaws.com/e4c22293c7619b969b518ca3e20004af.png",
        "description": "best chef ever!",
        "isChefOfTheWeek": false,
        "_id": "62541c37c269eed48884ef87",
        "createdAt": "2022-04-11T12:16:55.442Z",
        "updatedAt": "2022-04-11T12:16:55.442Z",
    }
}
*/

/** 
 * @api {delete} /chefs/:id Delete Chef
 * @apiName DeleteChef
 * @apiGroup Chefs
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Chef's unique <code>id</code>
 * 
 * @apiSuccess {String} msg Success Message.
 *
 * @apiSuccessExample Example data on success:
 * {
    "msg": "Success! chef removed"
}
*/

/** 
 * @api {get} /chefs/:id/restaurants Get Chefs Restaurants
 * @apiName GetChefsRestaurants
 * @apiGroup Chefs
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Chef's unique <code>id</code>
 * 
 * @apiSuccess {Object[]} dishes List of chefs restaurants (Array of Objects).
 * @apiSuccess {Number} totalDishes Number of total restaurants dishes.
 *
 * @apiSuccessExample Example data on success:
 * {
    "restaurants": [
        {
            "signatureDish": null,
            "isPopular": false,
            "_id": "62319cb2c71217bf770f9b11",
            "name": "Kitchen Market",
            "image": "https://i.ibb.co/TmNKDSs/tiger-lili.png",
            "chef": "62319bd95cde0ce3c7ea4e88",
            "createdAt": "2022-03-16T08:15:46.351Z",
            "updatedAt": "2022-03-16T08:15:46.351Z",
            "__v": 0
        }
    ],
    "totalRestaurants": 1
}
*/
