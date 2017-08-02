const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    avatar_url: String!
    fetchOrgs: [Org]
    repos_url: [Repos]
  }

  type Org {
    fetchOrgs: [Org]
    login: String!
    id: ID!
    url: String!
  }

  type Repos {
    name: String!
  }

  type Query {
    getOrgs(name: String!): User
  }
`);


module.exports = schema;
