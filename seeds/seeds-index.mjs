import seedCategories from './category-seeds.mjs';
import seedProducts from './product-seeds.mjs';
import seedTags from './tag-seeds.mjs';
import seedProductTags from './product-tag-seeds.mjs';

import sequelize from '../config/database.mjs';

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
