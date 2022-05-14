var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'User'},
    cart:{type:Object,required:true},
    address:{type: String, required: true},
    name:{type: String, required: true},
    paymentId:{type: String,required: false},
    paymentMode:{type: String, required: true}
}, { timestamps:true});

module.exports = mongoose.model('Order', schema);