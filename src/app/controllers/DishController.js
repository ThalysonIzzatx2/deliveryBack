import Dish from '../models/Dish';
import Restaurant from '../models/Restaurant';

class DishController {
    async index(req, res) {
        const { restaurantId } = req.params;
        const { page = 1 } = req.query;

        if(!restaurantId) return res.json({error: 'Whitout restaurant id'});

        const dishes = await Dish.findAll({
            where: { restaurants_id: restaurantId },
            attributes: ['id', 'name', 'photo', 'price', 'bio'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [{
                model: Restaurant,
                as: 'rest',
                attributes: ['id', 'name', 'logo', 'bio']
            }]
        });


        res.json(dishes);

    }
    async store(req, res) {
        const dish = await Dish.create(req.body);
        return res.json(dish);
    }
}

export default new DishController();