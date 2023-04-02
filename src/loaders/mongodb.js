const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://egss:abc,123@cluster0.6hlbv9g.mongodb.net/test')
}

module.exports = startDB;