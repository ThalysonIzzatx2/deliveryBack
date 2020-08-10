import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

class Dish extends Model {
    static init(sequelize) {
        super.init({      
            name: Sequelize.STRING,
            photo: Sequelize.STRING,
            price: Sequelize.DOUBLE,
            bio: Sequelize.STRING,
        }, {
            sequelize
        });

        return this;
    
    }

    static associate(models) {
        this.belongsTo(models.Restaurant, { foreignKey: 'restaurants_id', as: 'rest' });
    
      }
    
}

export default Dish;