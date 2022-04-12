/* ------------------------------ Dishes ------------------------------ */
/**
 * @api {get} /dishes Get all Dishes
 * @apiName GetDishes
 * @apiGroup Dishes
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} dishes List of dishes (Array of Objects).
 * @apiSuccess {Number} totalDishes Number of total dishes.
 *
 * @apiSuccessExample Example data on success:
 * {
 *  "dishes": [
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
            "restaurant": {
                "_id": "62319cb2c71217bf770f9b0e",
                "name": "Kab Kem"
            },
            "createdAt": "2022-03-16T08:17:31.087Z",
            "updatedAt": "2022-03-16T08:17:31.087Z",
        },
    ]
    "totalDishes": 1    
 * }
 */

/** 
 * @api {post} /dishes Create a new Dish
 * @apiName PostDishes
 * @apiGroup Dishes
 * @apiVersion 1.0.0
 *
 * @apiBody {String{..40}} name Name of the Dish
 * @apiBody {Number} price Price of the Dish
 * @apiBody {String} image Image of the Dish
 * @apiBody {String[]} ingredients List of ingredients (Array of Strings)
 * @apiBody {String[]} [tags=[]] List of tags (Array of Strings)
 * @apiBody {String} restaurant unique <code>id</code> of Restaurant
 * 
 * @apiSuccess {Object} dish New Dish Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "dish": {
        "name": "fish & chips",
        "price": 69,
        "image": "https://i.ibb.co/whs3KG4/rectangle2.png",
        "ingredients": [
            "fish",
            "chips"
        ],
        "tags": [],
        "restaurant": "62319cb2c71217bf770f9b0d",
        "_id": "62552b40c269eed48884efa2",
        "createdAt": "2022-04-12T07:33:20.837Z",
        "updatedAt": "2022-04-12T07:33:20.837Z",
    }
}
*/

/** 
 * @api {get} /dishes/:id Get Single Dish
 * @apiName GetSingleDish
 * @apiGroup Dishes
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Dish's unique <code>id</code>

 * 
 * @apiSuccess {Object} dish Found Dish Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "dish": {
        "_id": "62552b40c269eed48884efa2",
        "name": "fish & chips",
        "price": 69,
        "image": "https://i.ibb.co/whs3KG4/rectangle2.png",
        "ingredients": [
            "fish",
            "chips"
        ],
        "tags": [],
        "restaurant": "62319cb2c71217bf770f9b0d",
        "createdAt": "2022-04-12T07:33:20.837Z",
        "updatedAt": "2022-04-12T07:33:20.837Z",
    }
}
*/

/** 
 * @api {patch} /dishes/:id Update Dish
 * @apiName UpdateDish
 * @apiGroup Dishes
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Dish's unique <code>id</code>
 * 
 * @apiBody {String{..40}} name Name of the Dish
 * @apiBody {Number} price Price of the Dish
 * @apiBody {String} image Image of the Dish
 * @apiBody {String[]} ingredients List of ingredients (Array of Strings)
 * @apiBody {String[]} [tags=[]] List of tags (Array of Strings)
 * @apiBody {String} restaurant unique <code>id</code> of Restaurant
 * 
 * @apiSuccess {Object} dish Updated Dish Object.
 *
 * @apiSuccessExample Example data on success:
 * {
    "dish": {
        "_id": "62552b40c269eed48884efa2",
        "name": "fish & chips",
        "price": 69,
        "image": "https://i.ibb.co/whs3KG4/rectangle2.png",
        "ingredients": [
            "fish",
            "chips"
        ],
        "tags": [
            "spicy"
        ],
        "restaurant": "62319cb2c71217bf770f9b0d",
        "createdAt": "2022-04-12T07:33:20.837Z",
        "updatedAt": "2022-04-12T07:36:04.537Z",
    }
}
*/

/** 
 * @api {delete} /dishes/:id Delete Dish
 * @apiName DeleteDish
 * @apiGroup Dishes
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Dish's unique <code>id</code>
 * 
 * @apiSuccess {String} msg Success Message.
 *
 * @apiSuccessExample Example data on success:
 * {
    "msg": "Success! dish removed"
}
*/
