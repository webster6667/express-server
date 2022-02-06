// const {User} = require('../models/models')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserController {
    async getAll(req, res) {

        const allUsers = await prisma.author.findMany();

        // let users = await User.findAll();
        
        return res.json(allUsers)
    }

    async getOne(req, res) {
        // const {id} = req.params
        // const user = await User.findOne(
        //     {
        //         where: {id}
        //     },
        // )
        // return res.json(user)
    }
}

module.exports = new UserController()