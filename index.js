require('dotenv').config()
const express = require('express')
const cors = require('cors')
const session = require("express-session");
const {graphqlHTTP} = require('express-graphql')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = require('./routes/index')

const PORT = process.env.PORT || 5085

const schema = require('./schema')

var allowedOrigins = ["https://2ssi7.csb.app"];

const sessionConfig = {
    // ... other methods
    cookie: {
        sameSite: "none",
    },
};

const app = express()

// app.set("trust proxy", 1); // trust first proxy
// sessionConfig.cookie.secure = true;
//
// app.use(session(sessionConfig));


app.use(
    cors({
        origin: allowedOrigins,
        preflightContinue: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.use(express.json())

app.use('/api', router)

const root = {
    getAllUsers: async () => {
        const users = await prisma.user.findMany();

        return users
    },
    getUser: async ({id}) => {
        
        const user = await prisma.user.findMany()

        return user[0]
    },
    getAllJobs: async () => {
        const jobs = await prisma.job.findMany();

        return jobs
    },
    createUser: async ({input}) => {
        const user = await prisma.user.create({
            data: {
                id: -Math.abs(new Date().getTime()),
                ...input
            }
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
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()