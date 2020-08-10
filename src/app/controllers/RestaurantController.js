import Restaurant from '../models/Restaurant';


class RestaurantController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const rest = await Restaurant.findAll({
            limit: 20,
            offset: (page - 1) * 20,
            attributes: ['id', 'name', 'logo', 'address', 'bio'],
        });
        
        return res.json(rest);

    }
    async store(req, res) {
        const restExists = await Restaurant.findOne({ where: { name: req.body.name }} );

        if (restExists) {
            return res.status(400).json({message: "Name already exists."})
        }
        const emailExists = await Restaurant.findOne({ where: { email: req.body.email }} );

        if (emailExists) {
            return res.status(400).json({message: "Email already exists."})
        }
      
        const { id, name, bio, address } = await Restaurant.create(req.body);
        return res.json({
        id,
        name,
        bio,
        address
        });
    }
}

export default new RestaurantController();