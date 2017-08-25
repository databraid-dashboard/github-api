/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('dotenv').config();
const nock = require('nock');
const { issuesFetch, pullRequestsFetch, repoPR, milestonesFetch } = require('./RepoMock');
const Repo = require('../src/models/Repo');
const Issue = require('../src/models/Issue');
const PullRequest = require('../src/models/PullRequest');
const Milestone = require('../src/models/Milestone');

describe('Repo model', () => {
  const repo = new Repo({
    id: 97292532,
    name: 'react-inbox',
    full_name: 'michaelmurray6298/react-inbox',
    owner: {
      login: 'michaelmurray6298',
      id: 24865792,
      avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/michaelmurray6298',
      html_url: 'https://github.com/michaelmurray6298',
      followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
      following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
      gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
      organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
      repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
      events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
      received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/michaelmurray6298/react-inbox',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/michaelmurray6298/react-inbox',
    forks_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/forks',
    keys_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/teams',
    hooks_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/hooks',
    issue_events_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/events{/number}',
    events_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/events',
    assignees_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/assignees{/user}',
    branches_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/branches{/branch}',
    tags_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/tags',
    blobs_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/languages',
    stargazers_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/stargazers',
    contributors_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/contributors',
    subscribers_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/subscribers',
    subscription_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/subscription',
    commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/contents/{+path}',
    compare_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/merges',
    archive_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/downloads',
    issues_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues{/number}',
    pulls_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/labels{/name}',
    releases_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/releases{/id}',
    deployments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/deployments',
    created_at: '2017-07-15T04:40:38Z',
    updated_at: '2017-07-17T23:57:59Z',
    pushed_at: '2017-08-02T22:09:22Z',
    git_url: 'git://github.com/michaelmurray6298/react-inbox.git',
    ssh_url: 'git@github.com:michaelmurray6298/react-inbox.git',
    clone_url: 'https://github.com/michaelmurray6298/react-inbox.git',
    svn_url: 'https://github.com/michaelmurray6298/react-inbox',
    homepage: null,
    size: 229,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 2,
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master',
    network_count: 0,
    subscribers_count: 0,
  });

  it('accepts id, name, open issues, issues url, pull requests url, and milestones url as passed in arguments', () => {
    expect(repo.id).to.equal(97292532);
    expect(repo.name).to.equal('react-inbox');
    expect(repo.openIssues).to.equal(2);
    expect(repo.issuesUrl).to.equal('https://api.github.com/repos/michaelmurray6298/react-inbox/issues{/number}');
    expect(repo.pullRequestUrl).to.equal('https://api.github.com/repos/michaelmurray6298/react-inbox/pulls{/number}');
    expect(repo.milestonesUrl).to.equal('https://api.github.com/repos/michaelmurray6298/react-inbox/milestones{/number}');
  });
  after((done) => {
    done();
  });

  it('should fetch the repo issues', async () => {
    nock('https://api.github.com')
      .get(`/repos/michaelmurray6298/react-inbox/issues?state=all&access_token=${process.env.TKN}`)
      .reply(200, issuesFetch);
    const repoIssue = await repo.issues;
    expect(repoIssue[0]).to.be.an.instanceof(Issue);
  });
  after((done) => {
    done();
  });

  it('should fetch the repo pull requests', async () => {
    nock('https://api.github.com')
      .get(`/repos/michaelmurray6298/react-inbox/pulls?access_token=${process.env.TKN}`)
      .reply(200, pullRequestsFetch);
    nock('https://api.github.com')
      .get(`/repos/michaelmurray6298/react-inbox/pulls/4?access_token=${process.env.TKN}`)
      .reply(200, repoPR);
    const repoPullRequests = await repo.pullRequests;
    expect(repoPullRequests[0]).to.be.an.instanceof(PullRequest);
  });
  after((done) => {
    done();
  });

  it('should fetch the repo milestones', async () => {
    nock('https://api.github.com')
      .get(`/repos/michaelmurray6298/react-inbox/milestones?access_token=${process.env.TKN}`)
      .reply(200, milestonesFetch);
    const repoMilestones = await repo.milestones;
    expect(repoMilestones[0]).to.be.an.instanceof(Milestone);
  });
  after((done) => {
    done();
  });
});
