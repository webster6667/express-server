require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const sequelize = require('./db')

const router = require('./routes/index')
const {User, Job} = require('./models/models')

const PORT = process.env.PORT || 5085

const schema = require('./schema')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', router)

const root = {
    getAllUsers: async () => {
        const users = await User.findAll()

        return users
    },
    getUser: async ({id}) => {
        const user = await User.findOne({where: {id}})

        return user
    },
    getAllJobs: async () => {
        const jobs = await Job.findAll()

        return jobs
    },
    createUser: async ({input}) => {
        const user = await User.create({
            ...input
        })

        return user
    },
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()