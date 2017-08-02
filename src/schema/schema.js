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
    fetchPullRequest: [PullRequest]
  }

  type PullRequest {
    title: String!
    number: Int!
    mergeability: Boolean!
  }

  type Issue {
    title: String!
    number: Int!
  }

  type Query {
    getOrgs(name: String!): User
  }
`);


module.exports = schema;
