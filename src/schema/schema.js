const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    avatar_url: String!
    orgs(name: String): [Org]
    userRepos: [Repos]
  }

  type Org {
    id: ID!
    login: String!
    url: String!
    orgRepos(name: String): [Repos]
  }

  type Repos {
    id: ID!
    name: String!
    openIssues: Int!
    issue: [Issue]
    pullRequest: [PullRequest]
    milestone: [Milestone]
  }

  type PullRequest {
    id: ID!
    title: String!
    submittedBy: String!
    createdAt: String!
    number: Int!
    mergeable: Boolean!
  }

  type Issue {
    id: ID!
    title: String!
    number: Int!
    state: String!
    assigneeAvatar: String!
    assigneeLogin: String!
    labels: [String]
  }

  type Milestone {
    id: ID!
    title: String!
    openIssues: Int!
    closedIssues: Int!
    dueOn: String!
  }

  type Query {
    gitData(name: String!): User
  }
`);

module.exports = schema;
