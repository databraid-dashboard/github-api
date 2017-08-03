const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    avatar_url: String!
    fetchOrgs: [Org]
    fetchUserRepo: [Repos]
  }

  type Org {
    id: ID!
    login: String!
    url: String!
    fetchRepos: [Repos]
  }

  type Repos {
    id: ID!
    name: String!
    fetchIssue: [Issue]
    openIssues: Int!
    fetchPullRequest: [PullRequest]
    fetchMilestone: [Milestone]
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
    getGitData(name: String!): User
  }
`);


module.exports = schema;
