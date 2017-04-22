"use strict";
var express = require("express");
var database = require("../services/database");
var db = database.default.connect();
var router = express.Router();
var drinks = [
    {
        name: 'Cream Coffee',
        mainIngredient: 'Cream'
    }
];
/**
 * GET all drinks
 */
router.get('/', function (req, res, next) {
    //  let drinks = drink.default.find()
    //  .then((drinks)=> {
    res.status(200).json(drinks);
    //  })
    //  .catch((e)=> console.log(e));
});
/**
 * GET specific drinks
 */
router.get('/:id', function (req, res, next) {
    var id = req.params['id'];
    res.json(200, drinks[0]);
});
/**
 * Post a new food
 */
router.post('/', function (req, res, next) {
    res.setHeader('Location', 'api/drinks' + 1);
});
/**
 * Put update a specific food
 */
router.put('/:id', function (req, res, next) {
    var id = req.params['id'];
    res.json(204);
});
/**
 * DELETE a specific food
 */
router.delete('/:id', function (req, res, next) {
    var id = req.params['id'];
    res.json(204);
});
module.exports = router;
//# sourceMappingURL=drinks.api.js.map