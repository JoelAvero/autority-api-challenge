import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import * as config from '@/config/sequelize';

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

// Create sequelize instance
const sequelize = new Sequelize(sequelizeConfig);

// Auto import models
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inject sequelize instance to models
modelDefiners.forEach((model) => model.default(sequelize));

// Capitalize model names
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

// reassign capitalized models
sequelize.models = Object.fromEntries(capsEntries);

// Associations
Object.keys(sequelize.models).forEach((modelName) => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

export default sequelize;
