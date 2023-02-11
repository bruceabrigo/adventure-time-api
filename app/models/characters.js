const mongoose = require('mongoose')
const foodSchema = require('./food')
const characterSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		voicedBy: {
			type: String,
			required: true,
		},
		human: {
			type: Boolean,
			required: true,
		},
		foods: [foodSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Character', characterSchema)
