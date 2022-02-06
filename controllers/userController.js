const {User} = require('../models/models')

class UserController {
    async getAll(req, res) {
        let users = await User.findAll();
        
        return res.json(users)
    }

    async getOne(req, res) {
        const {id} = req.params
        const user = await User.findOne(
            {
                where: {id}
            },
        )
        return res.json(user)
    }
}

module.exports = new UserController()