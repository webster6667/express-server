const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserController {
    async getAll(req, res) {

        const users = await prisma.user.findMany();

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return res.json(users)
    }

    async getOne(req, res) {
        const {id} = req.params
        const user = await prisma.user.findMany({
            where: {id: Number(id)},
            take: 1
        })
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return res.json(user)
    }
}

module.exports = new UserController()