"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var connectionString = 'mongodb://jonathan:reasor@ds111851.mlab.com:11851/barstucks';
var Database = (function () {
    function Database() {
    }
    // Connect to Database
    // Returns: mongoose.Connection object
    Database.connect = function () {
        return mongoose.createConnection(connectionString);
    };
    return Database;
}());
exports.default = Database;
//# sourceMappingURL=database.js.map