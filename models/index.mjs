import Category from './category.mjs';
import Product from './product.mjs';
import Tag from './tag.mjs';

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
});

export { Category, Product, Tag };
