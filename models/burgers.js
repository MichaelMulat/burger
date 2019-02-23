var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objectColVals, cond, cb){
        orm.updateOne("burgers", objectColVals, cond, function(res){
            cb(res);
        });
    }
};

module.exports = burger;