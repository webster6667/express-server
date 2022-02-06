const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserController {
    async getAll(req, res) {

        const users = await prisma.user.findMany();
        
        return res.json(users)
    }

    async getOne(req, res) {
        const {id} = req.params
        const user = await prisma.user.findMany({
            where: {id: Number(id)},
            take: 1
        })
        return res.json(user)
    }
}

module.exports = new UserController()