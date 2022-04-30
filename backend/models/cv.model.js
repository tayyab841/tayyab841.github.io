const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cvSchema = new Schema({
    title: {type: String, required: true}
}, {
    timestamps: true,
});

const CV = mongoose.model('CV', cvSchema);

module.exports = CV;