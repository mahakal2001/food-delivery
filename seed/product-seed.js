var Product = require('../models/product');
var dbConfig = require('../config/db')

var mongoose = require('mongoose');


mongoose.connect(dbConfig.url);

var products = [
    new Product({
        imagePath: 'https://images.dominos.co.in/Choco_Lava.png',
        title: 'Choco Lava Cake',
        description: 'Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake',
        extraDescription:'',
        price: 99
    }),
    new Product({
        imagePath: 'https://images.dominos.co.in/CAKE03.jpg',
        title: 'Red Velvet Lava Cake',
        description: 'A truly indulgent experience with sweet and rich red velvet cake ',
        extraDescription:'',
        price: 129
    }),
    new Product({
        imagePath: 'https://images.dominos.co.in/Butterscotch.png',
        title: 'Butterscotch Mousse Cake',
        description: 'Sweet temptation! Butterscotch flavored mousse on a creamy cheese flavoured base ',
        extraDescription:'',
        price: 99
    }),
    new Product({
        imagePath: 'https://images.dominos.co.in/Brownie_Fantasy.png',
        title: 'Brownie Fantasy',
        description: 'Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce to give a burst',
        extraDescription:'',
        price: 59
    }),
    new Product({
        imagePath: 'https://images.dominos.co.in/farmhouse.png',
        title: ' CUSTOMISE Farmhouse',
        description: 'Delightful combination of onion, capsicum, tomato & grilled mushroom',
        extraDescription:'',
        price: 399
    }),
    new Product({
        imagePath: 'https://images.dominos.co.in/MoroccanSpiceChickenChunks.jpg',
        title: 'Moroccan Chicken Chunks',
        description: 'Oven baked soft tender boneless nuggets sprinkled with peri peri seasoning.',
        extraDescription:'',
        price: 849
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}