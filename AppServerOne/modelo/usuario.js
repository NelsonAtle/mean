const mongoose = require('mongoose');
const schema =  mongoose.Schema;

const user = new schema({
	name: {type: String},
	lastName: {type: String},
	user: {type: String},
	password: {type: String}
}); 

module.exports = mongoose.model('users',user);