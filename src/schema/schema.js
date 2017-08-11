const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    userAvatar: String!
  }

  type Orgs {
    orgs: [Org]
  }

  type Org {
    id: ID!
    login: String!
    url: String!
    avatarUrl: String!
  }

  type Repos {
    repos: [Repo]
  }

  type Repo {
    id: ID!
    name: String!
    openIssues: Int
    issues: [Issue]
    pullRequests: [PullRequest]
    milestones: [Milestone]
  }

  type PullRequest {
    id: ID!
    title: String
    submittedBy: String
    createdAt: String!
    number: Int!
    mergeable: Boolean!
  }

  type Issue {
    id: ID!
    title: String
    number: Int
    state: String
    assignee: String
    assigneeAvatar: String
<<<<<<< HEAD
    labels: [String]
=======
    labels: [Label]
  }

  type Label {
    name: String
    color: String
>>>>>>> 3131f36dc5b50f786f6549f3fc7c6fb19951fc95
  }

  type Milestone {
    id: ID
    title: String
    openIssues: Int
    closedIssues: Int
    dueOn: String
  }

  type Query {
    user(userName: String!): User
    orgs(userName: String!, orgName: String): Orgs
    repos(userName: String, repoName: String, orgName: String): Repos
  }
`);

module.exports = schema;
