import Category from './category.mjs';
import Product from './product.mjs';

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

export { Category, Product };
