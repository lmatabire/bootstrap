"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainIngredient: String
});
exports.default = mongoose.model('Drink', drinkSchema);
//# sourceMappingURL=drink.model.js.map