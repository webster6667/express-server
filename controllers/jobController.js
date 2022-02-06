const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class JobController {
    async getAll(req, res) {
        const jobs = await prisma.job.findMany();

        return res.json(jobs)
    }
}

module.exports = new JobController()