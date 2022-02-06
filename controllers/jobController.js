const {Job} = require('../models/models')

class JobController {
    async getAll(req, res) {
        let users = await Job.findAll();
        
        return res.json(users)
    }
}

module.exports = new JobController()