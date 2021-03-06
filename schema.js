const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
    type User {
        id: ID
        name: String,
        phone: String,
        contentToken: String
    }
    
    type Job {
        id: ID
        title: String
    }
    
    input UserInput {
        name: String!
        lastName: String!
        phone: String!
    }
    
    type Query {
        getAllUsers: [User]
        getUser(id: Int): User
        getAllJobs: [Job]
    }
    
    type Mutation {
        createUser(input: UserInput): User
    }

`)

module.exports = schema
