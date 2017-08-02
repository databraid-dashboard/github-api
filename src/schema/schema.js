const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    fetchUser: String!
    id: ID!
    avatar_url: String!
    fetchOrgs: [Org]
    repos_url: [Repos]
  }

  type Org {
    login: String!
    id: ID!
    url: String!
    fetchRepos: [Repos]
  }

  type Repos {
    name: String!
    fetchIssue: [Issue]
  }

  type Issue {
    name: String!
  }

  type Query {
    getOrgs(name: String!): User
    testIssue: Issue
  }
`);


module.exports = schema;
