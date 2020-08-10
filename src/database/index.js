import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Restaurant from '../app/models/Restaurant';
import Dish from '../app/models/Dish';

import dbConfig from '../config/database';

const models = [User, Restaurant, Dish];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);

        models
        .map( (model) => model.init(this.connection) )
        .map(model => model.associate && model.associate(this.connection.models));

    }

    mongo() {
        this.mongoConnection = mongoose.connect('mongodb://localhost:27017/delivery', {
            useNewUrlParser: true,
          });
    }

    
}

export default new Database();