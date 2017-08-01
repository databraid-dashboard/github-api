const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    avatar_url: String!
    fetchOrgs: String!
    repos_url: [Repos]
  }

  type Org {
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
