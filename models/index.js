// import models
const Product = require('../Product');
const Category = require('./Category');
const Tag = require('../Tag');
const ProductTag = require('../ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model:
    unique: 
  }
})
// Categories have many Products
Category.hasMany(Product,{
  
})
// Products belongToMany Tags (through ProductTag)
seedProducts.belongsToMany(Tags, {
  through: ProductTag,
  unique: false
})
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
