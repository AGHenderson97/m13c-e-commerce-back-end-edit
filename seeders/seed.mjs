import sequelize from '../config/connection.mjs';
import seedAll from './seedAll.mjs';

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedAll();
  console.log('\n----- ALL SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
