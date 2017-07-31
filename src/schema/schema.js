const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    login: String!
    email: String!
    name: String!
    id: ID!
    profilePic: String!
    orgs: [Orgs]
    company: String
    repos: [Repos]
    public_repos: Int!
  }

  type Orgs {
    name: String!
  }

  type Repos {
    name: String!
  }

  type Query {
    userData(name: String!): User!
    orgData(url: String!): Orgs!
  }
`);

module.exports = schema;

// type User {
//   login: String!
//   email: String!
//   name: String!
//   id: ID!
//   profilePic: String!
//   orgs: [Orgs]
//   company: String
//   repos: [Repos]
// }

// type Orgs {
//   login: String!
//   id: ID!
//   repos: [Repos!]
//   issues: [Issues!]
//   members: [String!]!
//   profilePic: String!
// }
//
// type Repos {
//   name: String!
//   repo: [Repo!]!
// }
//
// type Issues {
//   id: Int!
//   number: Int!
//   state: String!
//   title: String!
//   assignees: [String!]
// }
//
// type Repo {
//   name: String!
//   branches: [String!]
//   branchesCommitHistory: [String!]
//   pullRequest: [PullRequest]
//   mergeRequests: [Merge]
//   startDate: String!
//   pullRequestCommits: String!
//   issues: [Issues]
// }
//
// type PullRequest {
//   status: [Status!]!
//   lengthOfTime: String!
// }
//
// type Merge {
//   status: String!
//   commit: String!
// }
