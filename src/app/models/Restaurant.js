import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

class Restaurant extends Model {
    static init(sequelize) {
        super.init({      
            logo: Sequelize.STRING,
            address: Sequelize.STRING,
            bio: Sequelize.STRING,
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            //user_id
            //menu_id
        }, {
            sequelize
        });

        this.addHook('beforeSave', async(rest) => {
            if (rest.password) {
                rest.password_hash = await bcrypt.hash(rest.password, 8);
            }
        });

        return this;
    
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
      }

    
}
export default Restaurant;