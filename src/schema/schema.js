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
    labels: [Label]
    isPR: Boolean!
  }

  type Label {
    name: String
    color: String
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
