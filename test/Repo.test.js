const { expect } = require('chai');
const nock = require('nock');
require('chai').use(require('sinon-chai'));
const Repo = require('../src/models/Repo');

/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

describe('Repo model', () => {
  const data = new Repo({
    id: 95143360,
    name: 'skiski-app',
    full_name: 'ski-ski/skiski-app',
    owner: {
      login: 'ski-ski',
      id: 29638033,
      avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ski-ski',
      html_url: 'https://github.com/ski-ski',
      followers_url: 'https://api.github.com/users/ski-ski/followers',
      following_url:
    'https://api.github.com/users/ski-ski/following{/other_user}',
      gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
      starred_url:
    'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ski-ski/subscriptions',
      organizations_url: 'https://api.github.com/users/ski-ski/orgs',
      repos_url: 'https://api.github.com/users/ski-ski/repos',
      events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
      received_events_url:
    'https://api.github.com/users/ski-ski/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/ski-ski/skiski-app',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/ski-ski/skiski-app',
    forks_url: 'https://api.github.com/repos/ski-ski/skiski-app/forks',
    keys_url: 'https://api.github.com/repos/ski-ski/skiski-app/keys{/key_id}',
    collaborators_url:
   'https://api.github.com/repos/ski-ski/skiski-app/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/ski-ski/skiski-app/teams',
    hooks_url: 'https://api.github.com/repos/ski-ski/skiski-app/hooks',
    issue_events_url:
   'https://api.github.com/repos/ski-ski/skiski-app/issues/events{/number}',
    events_url: 'https://api.github.com/repos/ski-ski/skiski-app/events',
    assignees_url:
   'https://api.github.com/repos/ski-ski/skiski-app/assignees{/user}',
    branches_url:
   'https://api.github.com/repos/ski-ski/skiski-app/branches{/branch}',
    tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/tags',
    blobs_url:
   'https://api.github.com/repos/ski-ski/skiski-app/git/blobs{/sha}',
    git_tags_url:
   'https://api.github.com/repos/ski-ski/skiski-app/git/tags{/sha}',
    git_refs_url:
   'https://api.github.com/repos/ski-ski/skiski-app/git/refs{/sha}',
    trees_url:
   'https://api.github.com/repos/ski-ski/skiski-app/git/trees{/sha}',
    statuses_url:
   'https://api.github.com/repos/ski-ski/skiski-app/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/ski-ski/skiski-app/languages',
    stargazers_url:
   'https://api.github.com/repos/ski-ski/skiski-app/stargazers',
    contributors_url:
   'https://api.github.com/repos/ski-ski/skiski-app/contributors',
    subscribers_url:
   'https://api.github.com/repos/ski-ski/skiski-app/subscribers',
    subscription_url:
   'https://api.github.com/repos/ski-ski/skiski-app/subscription',
    commits_url:
   'https://api.github.com/repos/ski-ski/skiski-app/commits{/sha}',
    git_commits_url:
   'https://api.github.com/repos/ski-ski/skiski-app/git/commits{/sha}',
    comments_url:
   'https://api.github.com/repos/ski-ski/skiski-app/comments{/number}',
    issue_comment_url:
   'https://api.github.com/repos/ski-ski/skiski-app/issues/comments{/number}',
    contents_url:
   'https://api.github.com/repos/ski-ski/skiski-app/contents/{+path}',
    compare_url:
   'https://api.github.com/repos/ski-ski/skiski-app/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/ski-ski/skiski-app/merges',
    archive_url:
   'https://api.github.com/repos/ski-ski/skiski-app/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/ski-ski/skiski-app/downloads',
    issues_url:
   'https://api.github.com/repos/ski-ski/skiski-app/issues{/number}',
    pulls_url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls{/number}',
    milestones_url:
   'https://api.github.com/repos/ski-ski/skiski-app/milestones{/number}',
    notifications_url:
   'https://api.github.com/repos/ski-ski/skiski-app/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/ski-ski/skiski-app/labels{/name}',
    releases_url:
   'https://api.github.com/repos/ski-ski/skiski-app/releases{/id}',
    deployments_url:
   'https://api.github.com/repos/ski-ski/skiski-app/deployments',
    created_at: '2017-06-22T18:08:21Z',
    updated_at: '2017-06-23T22:48:38Z',
    pushed_at: '2017-08-02T21:01:03Z',
    git_url: 'git://github.com/ski-ski/skiski-app.git',
    ssh_url: 'git@github.com:ski-ski/skiski-app.git',
    clone_url: 'https://github.com/ski-ski/skiski-app.git',
    svn_url: 'https://github.com/ski-ski/skiski-app',
    homepage: null,
    size: 472,
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
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: false,
      push: false,
      pull: true,
    },
  });

  it('accepts params', () => {
    expect(data.repo.id).to.equal(95143360);
  });
  it('has name property ', () => {
    expect(data.name).to.equal('skiski-app');
  });

  it('has id property ', () => {
    expect(data.id).to.equal(95143360);
  });

  it('has open issues property ', () => {
    expect(data.openIssues).to.equal(0);
  });

  after((done) => {
    done();
  });
  it('fetchIssue method returns an issue', async () => {
    const fetchIssueResponse = [
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/67',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/67/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/67/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/67/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/67',
        id: 247520833,
        number: 67,
        title: 'Dev',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-08-02T21:01:02Z',
        updated_at: '2017-08-02T22:19:42Z',
        closed_at: '2017-08-02T22:19:42Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/67',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/67',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/67.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/67.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/66',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/66/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/66/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/66/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/66',
        id: 247517524,
        number: 66,
        title: 'Test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-08-02T20:48:46Z',
        updated_at: '2017-08-02T22:19:42Z',
        closed_at: '2017-08-02T22:19:42Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/66',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/66',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/66.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/66.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/65',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/65/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/65/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/65/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/65',
        id: 247483086,
        number: 65,
        title: 'Test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-08-02T18:37:11Z',
        updated_at: '2017-08-02T20:46:27Z',
        closed_at: '2017-08-02T20:46:27Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/65',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/65',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/65.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/65.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/64',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/64/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/64/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/64/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/64',
        id: 247482882,
        number: 64,
        title: 'Test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-08-02T18:36:28Z',
        updated_at: '2017-08-02T20:47:11Z',
        closed_at: '2017-08-02T20:47:11Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/64',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/64',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/64.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/64.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/63',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/63/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/63/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/63/events',
        html_url: 'https://github.com/ski-ski/skiski-app/issues/63',
        id: 247458749,
        number: 63,
        title: 'Test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'open',
        locked: false,
        assignee: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        assignees: [
          {
            login: 'johanbmk',
            id: 18295830,
            avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johanbmk',
            html_url: 'https://github.com/johanbmk',
            followers_url: 'https://api.github.com/users/johanbmk/followers',
            following_url:
       'https://api.github.com/users/johanbmk/following{/other_user}',
            gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/johanbmk/subscriptions',
            organizations_url: 'https://api.github.com/users/johanbmk/orgs',
            repos_url: 'https://api.github.com/users/johanbmk/repos',
            events_url:
       'https://api.github.com/users/johanbmk/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/johanbmk/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 0,
        created_at: '2017-08-02T17:04:56Z',
        updated_at: '2017-08-03T01:59:06Z',
        closed_at: null,
        body: 'Test',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/62',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/62/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/62/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/62/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/62',
        id: 239889663,
        number: 62,
        title: 'resorts all fix',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-30T21:10:40Z',
        updated_at: '2017-06-30T21:12:00Z',
        closed_at: '2017-06-30T21:12:00Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/62',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/62',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/62.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/62.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/61',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/61/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/61/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/61/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/61',
        id: 239851117,
        number: 61,
        title: 'Delete .env',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-30T18:08:43Z',
        updated_at: '2017-06-30T18:08:51Z',
        closed_at: '2017-06-30T18:08:51Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/61',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/61',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/61.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/61.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/60',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/60/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/60/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/60/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/60',
        id: 239643103,
        number: 60,
        title: 'Updated api docs',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-30T00:01:07Z',
        updated_at: '2017-06-30T00:01:20Z',
        closed_at: '2017-06-30T00:01:20Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/60',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/60',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/60.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/60.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/59',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/59/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/59/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/59/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/59',
        id: 239642737,
        number: 59,
        title: 'Edit apidoc definitions to be consistent',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T23:58:12Z',
        updated_at: '2017-06-29T23:58:25Z',
        closed_at: '2017-06-29T23:58:19Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/59',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/59',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/59.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/59.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/58',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/58/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/58/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/58/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/58',
        id: 239642368,
        number: 58,
        title: 'adds auth on ratings route',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T23:55:27Z',
        updated_at: '2017-06-29T23:55:32Z',
        closed_at: '2017-06-29T23:55:32Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/58',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/58',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/58.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/58.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/57',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/57/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/57/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/57/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/57',
        id: 239533038,
        number: 57,
        title: 'MPV with docs',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T16:14:17Z',
        updated_at: '2017-06-29T16:14:26Z',
        closed_at: '2017-06-29T16:14:26Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/57',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/57',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/57.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/57.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/56',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/56/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/56/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/56/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/56',
        id: 239528000,
        number: 56,
        title: 'Add apidocs for ratings, favorites, and resorts',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T15:57:18Z',
        updated_at: '2017-06-29T15:57:26Z',
        closed_at: '2017-06-29T15:57:26Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/56',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/56',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/56.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/56.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/55',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/55/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/55/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/55/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/55',
        id: 239526014,
        number: 55,
        title: "Add apidoc for routes in 'token', 'trails', 'users'",
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T15:50:56Z',
        updated_at: '2017-06-29T15:51:11Z',
        closed_at: '2017-06-29T15:51:03Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/55',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/55',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/55.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/55.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/54',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/54/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/54/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/54/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/54',
        id: 239349261,
        number: 54,
        title: 'MVP',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T02:29:33Z',
        updated_at: '2017-06-29T02:29:54Z',
        closed_at: '2017-06-29T02:29:54Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/54',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/54',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/54.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/54.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/53',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/53/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/53/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/53/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/53',
        id: 239348965,
        number: 53,
        title: 'Add static server',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T02:27:18Z',
        updated_at: '2017-06-29T02:27:33Z',
        closed_at: '2017-06-29T02:27:24Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/53',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/53',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/53.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/53.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/52',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/52/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/52/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/52/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/52',
        id: 239346562,
        number: 52,
        title: 'Add fix for favorites test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T02:07:21Z',
        updated_at: '2017-06-29T02:07:31Z',
        closed_at: '2017-06-29T02:07:27Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/52',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/52',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/52.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/52.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/51',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/51/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/51/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/51/events',
        html_url: 'https://github.com/ski-ski/skiski-app/issues/51',
        id: 239345383,
        number: 51,
        title: 'Static site for apidocs',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        assignees: [
          {
            login: 'johanbmk',
            id: 18295830,
            avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johanbmk',
            html_url: 'https://github.com/johanbmk',
            followers_url: 'https://api.github.com/users/johanbmk/followers',
            following_url:
       'https://api.github.com/users/johanbmk/following{/other_user}',
            gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/johanbmk/subscriptions',
            organizations_url: 'https://api.github.com/users/johanbmk/orgs',
            repos_url: 'https://api.github.com/users/johanbmk/repos',
            events_url:
       'https://api.github.com/users/johanbmk/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/johanbmk/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 1,
        created_at: '2017-06-29T01:57:54Z',
        updated_at: '2017-06-29T03:17:02Z',
        closed_at: '2017-06-29T03:17:02Z',
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/50',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/50/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/50/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/50/events',
        html_url: 'https://github.com/ski-ski/skiski-app/issues/50',
        id: 239345325,
        number: 50,
        title: 'favorites.routes.test.js',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        assignees: [
          {
            login: 'michaelmurray6298',
            id: 24865792,
            avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/michaelmurray6298',
            html_url: 'https://github.com/michaelmurray6298',
            followers_url:
       'https://api.github.com/users/michaelmurray6298/followers',
            following_url:
       'https://api.github.com/users/michaelmurray6298/following{/other_user}',
            gists_url:
       'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/michaelmurray6298/subscriptions',
            organizations_url:
       'https://api.github.com/users/michaelmurray6298/orgs',
            repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
            events_url:
       'https://api.github.com/users/michaelmurray6298/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/michaelmurray6298/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T01:57:25Z',
        updated_at: '2017-06-29T05:16:22Z',
        closed_at: '2017-06-29T05:16:22Z',
        body: "Change to use 'agent' stuff.",
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/49',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/49/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/49/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/49/events',
        html_url: 'https://github.com/ski-ski/skiski-app/issues/49',
        id: 239345145,
        number: 49,
        title: 'Half of apiDoc',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        assignees: [
          {
            login: 'johanbmk',
            id: 18295830,
            avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johanbmk',
            html_url: 'https://github.com/johanbmk',
            followers_url: 'https://api.github.com/users/johanbmk/followers',
            following_url:
       'https://api.github.com/users/johanbmk/following{/other_user}',
            gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/johanbmk/subscriptions',
            organizations_url: 'https://api.github.com/users/johanbmk/orgs',
            repos_url: 'https://api.github.com/users/johanbmk/repos',
            events_url:
       'https://api.github.com/users/johanbmk/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/johanbmk/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 1,
        created_at: '2017-06-29T01:55:59Z',
        updated_at: '2017-06-29T15:44:17Z',
        closed_at: '2017-06-29T15:44:17Z',
        body: 'token, trails, users.',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/48',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/48/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/48/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/48/events',
        html_url: 'https://github.com/ski-ski/skiski-app/issues/48',
        id: 239345081,
        number: 48,
        title: 'Half of apiDoc',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        assignees: [
          {
            login: 'michaelmurray6298',
            id: 24865792,
            avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/michaelmurray6298',
            html_url: 'https://github.com/michaelmurray6298',
            followers_url:
       'https://api.github.com/users/michaelmurray6298/followers',
            following_url:
       'https://api.github.com/users/michaelmurray6298/following{/other_user}',
            gists_url:
       'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/michaelmurray6298/subscriptions',
            organizations_url:
       'https://api.github.com/users/michaelmurray6298/orgs',
            repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
            events_url:
       'https://api.github.com/users/michaelmurray6298/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/michaelmurray6298/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T01:55:33Z',
        updated_at: '2017-06-29T15:51:35Z',
        closed_at: '2017-06-29T15:51:35Z',
        body: 'favorites, ratings, resorts',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/47',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/47/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/47/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/47/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/47',
        id: 239344924,
        number: 47,
        title: 'Add auth on favorites',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-29T01:54:10Z',
        updated_at: '2017-06-29T01:54:29Z',
        closed_at: '2017-06-29T01:54:16Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/47',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/47',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/47.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/47.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/46',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/46/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/46/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/46/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/46',
        id: 239330160,
        number: 46,
        title: 'Add auth for users routes',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T23:55:17Z',
        updated_at: '2017-06-28T23:55:25Z',
        closed_at: '2017-06-28T23:55:23Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/46',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/46',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/46.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/46.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/45',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/45/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/45/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/45/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/45',
        id: 239316975,
        number: 45,
        title: 'First part of authorization',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T22:33:04Z',
        updated_at: '2017-06-28T22:33:20Z',
        closed_at: '2017-06-28T22:33:11Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/45',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/45',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/45.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/45.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/44',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/44/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/44/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/44/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/44',
        id: 239306120,
        number: 44,
        title: "Fix sign-up route handling at 'POST /users'",
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T21:41:01Z',
        updated_at: '2017-06-28T21:41:29Z',
        closed_at: '2017-06-28T21:41:07Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/44',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/44',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/44.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/44.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/43',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/43/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/43/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/43/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/43',
        id: 239304894,
        number: 43,
        title: 'Add update to users routes test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T21:35:36Z',
        updated_at: '2017-06-28T21:35:58Z',
        closed_at: '2017-06-28T21:35:52Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/43',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/43',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/43.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/43.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/42',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/42/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/42/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/42/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/42',
        id: 239268247,
        number: 42,
        title: 'Add tests',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T19:21:25Z',
        updated_at: '2017-06-28T19:21:35Z',
        closed_at: '2017-06-28T19:21:30Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/42',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/42',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/42.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/42.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/41',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/41/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/41/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/41/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/41',
        id: 239243773,
        number: 41,
        title: 'Favorites',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T17:50:33Z',
        updated_at: '2017-06-28T17:51:17Z',
        closed_at: '2017-06-28T17:50:43Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/41',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/41',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/41.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/41.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/40',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/40/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/40/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/40/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/40',
        id: 239228979,
        number: 40,
        title: 'Add route to get all data for all resorts',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T16:54:32Z',
        updated_at: '2017-06-28T16:54:49Z',
        closed_at: '2017-06-28T16:54:38Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/40',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/40',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/40.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/40.patch',
        },
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/39',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/39/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/39/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/39/events',
        html_url: 'https://github.com/ski-ski/skiski-app/issues/39',
        id: 239220141,
        number: 39,
        title: 'Routes for Favorites',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        assignees: [
          {
            login: 'johanbmk',
            id: 18295830,
            avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johanbmk',
            html_url: 'https://github.com/johanbmk',
            followers_url: 'https://api.github.com/users/johanbmk/followers',
            following_url:
       'https://api.github.com/users/johanbmk/following{/other_user}',
            gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/johanbmk/subscriptions',
            organizations_url: 'https://api.github.com/users/johanbmk/orgs',
            repos_url: 'https://api.github.com/users/johanbmk/repos',
            events_url:
       'https://api.github.com/users/johanbmk/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/johanbmk/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 1,
        created_at: '2017-06-28T16:21:37Z',
        updated_at: '2017-06-29T01:53:43Z',
        closed_at: '2017-06-29T01:53:43Z',
        body: '',
      },
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/38',
        repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
        labels_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/38/labels{/name}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/38/comments',
        events_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/38/events',
        html_url: 'https://github.com/ski-ski/skiski-app/pull/38',
        id: 239057242,
        number: 38,
        title: 'Routes for Ratings',
        user: {
          login: 'johanbmk',
          id: 18295830,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18295830?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johanbmk',
          html_url: 'https://github.com/johanbmk',
          followers_url: 'https://api.github.com/users/johanbmk/followers',
          following_url:
      'https://api.github.com/users/johanbmk/following{/other_user}',
          gists_url: 'https://api.github.com/users/johanbmk/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/johanbmk/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/johanbmk/subscriptions',
          organizations_url: 'https://api.github.com/users/johanbmk/orgs',
          repos_url: 'https://api.github.com/users/johanbmk/repos',
          events_url: 'https://api.github.com/users/johanbmk/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/johanbmk/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2017-06-28T05:33:44Z',
        updated_at: '2017-06-28T05:34:09Z',
        closed_at: '2017-06-28T05:33:55Z',
        pull_request: {
          url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/38',
          html_url: 'https://github.com/ski-ski/skiski-app/pull/38',
          diff_url: 'https://github.com/ski-ski/skiski-app/pull/38.diff',
          patch_url: 'https://github.com/ski-ski/skiski-app/pull/38.patch',
        },
        body: '',
      },
    ];
    nock('https://api.github.com')
      .get(
        `/repos/ski-ski/skiski-app/issues?state=all&access_token=${process.env
          .TKN}`,
      )
      .reply(200, fetchIssueResponse);
    const issue = await data.issue;
    expect(issue[0].issue.id).to.equal(fetchIssueResponse[0].id);
  });
  after((done) => {
    done();
  });
  it('fetchPullRequest method returns a pull request', async () => {
    const fetchPullsResponse = [
      {
        url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/68',
        id: 133846622,
        html_url: 'https://github.com/ski-ski/skiski-app/pull/68',
        diff_url: 'https://github.com/ski-ski/skiski-app/pull/68.diff',
        patch_url: 'https://github.com/ski-ski/skiski-app/pull/68.patch',
        issue_url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/68',
        number: 68,
        state: 'open',
        locked: false,
        title: 'Test',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        body: '',
        created_at: '2017-08-03T02:23:38Z',
        updated_at: '2017-08-03T02:23:38Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: '28484dbd354a30cdf733ed28b4e40d1ae0048582',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        milestone: null,
        commits_url:
     'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/commits',
        review_comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/comments',
        review_comment_url:
     'https://api.github.com/repos/ski-ski/skiski-app/pulls/comments{/number}',
        comments_url:
     'https://api.github.com/repos/ski-ski/skiski-app/issues/68/comments',
        statuses_url:
     'https://api.github.com/repos/ski-ski/skiski-app/statuses/324b698a9e7193a0abb42cf7d5d6d8a777b7bfbf',
        head: {
          label: 'ski-ski:master',
          ref: 'master',
          sha: '324b698a9e7193a0abb42cf7d5d6d8a777b7bfbf',
          user: {
            login: 'ski-ski',
            id: 29638033,
            avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/ski-ski',
            html_url: 'https://github.com/ski-ski',
            followers_url: 'https://api.github.com/users/ski-ski/followers',
            following_url:
       'https://api.github.com/users/ski-ski/following{/other_user}',
            gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/ski-ski/subscriptions',
            organizations_url: 'https://api.github.com/users/ski-ski/orgs',
            repos_url: 'https://api.github.com/users/ski-ski/repos',
            events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/ski-ski/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 95143360,
            name: 'skiski-app',
            full_name: 'ski-ski/skiski-app',
            owner: {
              login: 'ski-ski',
              id: 29638033,
              avatar_url:
        'https://avatars3.githubusercontent.com/u/29638033?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/ski-ski',
              html_url: 'https://github.com/ski-ski',
              followers_url: 'https://api.github.com/users/ski-ski/followers',
              following_url:
        'https://api.github.com/users/ski-ski/following{/other_user}',
              gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
              starred_url:
        'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
              subscriptions_url:
        'https://api.github.com/users/ski-ski/subscriptions',
              organizations_url: 'https://api.github.com/users/ski-ski/orgs',
              repos_url: 'https://api.github.com/users/ski-ski/repos',
              events_url:
        'https://api.github.com/users/ski-ski/events{/privacy}',
              received_events_url:
        'https://api.github.com/users/ski-ski/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/ski-ski/skiski-app',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/ski-ski/skiski-app',
            forks_url: 'https://api.github.com/repos/ski-ski/skiski-app/forks',
            keys_url:
       'https://api.github.com/repos/ski-ski/skiski-app/keys{/key_id}',
            collaborators_url:
       'https://api.github.com/repos/ski-ski/skiski-app/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/ski-ski/skiski-app/teams',
            hooks_url: 'https://api.github.com/repos/ski-ski/skiski-app/hooks',
            issue_events_url:
       'https://api.github.com/repos/ski-ski/skiski-app/issues/events{/number}',
            events_url:
       'https://api.github.com/repos/ski-ski/skiski-app/events',
            assignees_url:
       'https://api.github.com/repos/ski-ski/skiski-app/assignees{/user}',
            branches_url:
       'https://api.github.com/repos/ski-ski/skiski-app/branches{/branch}',
            tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/tags',
            blobs_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/blobs{/sha}',
            git_tags_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/tags{/sha}',
            git_refs_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/refs{/sha}',
            trees_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/trees{/sha}',
            statuses_url:
       'https://api.github.com/repos/ski-ski/skiski-app/statuses/{sha}',
            languages_url:
       'https://api.github.com/repos/ski-ski/skiski-app/languages',
            stargazers_url:
       'https://api.github.com/repos/ski-ski/skiski-app/stargazers',
            contributors_url:
       'https://api.github.com/repos/ski-ski/skiski-app/contributors',
            subscribers_url:
       'https://api.github.com/repos/ski-ski/skiski-app/subscribers',
            subscription_url:
       'https://api.github.com/repos/ski-ski/skiski-app/subscription',
            commits_url:
       'https://api.github.com/repos/ski-ski/skiski-app/commits{/sha}',
            git_commits_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/commits{/sha}',
            comments_url:
       'https://api.github.com/repos/ski-ski/skiski-app/comments{/number}',
            issue_comment_url:
       'https://api.github.com/repos/ski-ski/skiski-app/issues/comments{/number}',
            contents_url:
       'https://api.github.com/repos/ski-ski/skiski-app/contents/{+path}',
            compare_url:
       'https://api.github.com/repos/ski-ski/skiski-app/compare/{base}...{head}',
            merges_url:
       'https://api.github.com/repos/ski-ski/skiski-app/merges',
            archive_url:
       'https://api.github.com/repos/ski-ski/skiski-app/{archive_format}{/ref}',
            downloads_url:
       'https://api.github.com/repos/ski-ski/skiski-app/downloads',
            issues_url:
       'https://api.github.com/repos/ski-ski/skiski-app/issues{/number}',
            pulls_url:
       'https://api.github.com/repos/ski-ski/skiski-app/pulls{/number}',
            milestones_url:
       'https://api.github.com/repos/ski-ski/skiski-app/milestones{/number}',
            notifications_url:
       'https://api.github.com/repos/ski-ski/skiski-app/notifications{?since,all,participating}',
            labels_url:
       'https://api.github.com/repos/ski-ski/skiski-app/labels{/name}',
            releases_url:
       'https://api.github.com/repos/ski-ski/skiski-app/releases{/id}',
            deployments_url:
       'https://api.github.com/repos/ski-ski/skiski-app/deployments',
            created_at: '2017-06-22T18:08:21Z',
            updated_at: '2017-06-23T22:48:38Z',
            pushed_at: '2017-08-03T02:23:38Z',
            git_url: 'git://github.com/ski-ski/skiski-app.git',
            ssh_url: 'git@github.com:ski-ski/skiski-app.git',
            clone_url: 'https://github.com/ski-ski/skiski-app.git',
            svn_url: 'https://github.com/ski-ski/skiski-app',
            homepage: null,
            size: 472,
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
          },
        },
        base: {
          label: 'ski-ski:dev',
          ref: 'dev',
          sha: '9747c4057a307951c067e0b6c3342d3c04287634',
          user: {
            login: 'ski-ski',
            id: 29638033,
            avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/ski-ski',
            html_url: 'https://github.com/ski-ski',
            followers_url: 'https://api.github.com/users/ski-ski/followers',
            following_url:
       'https://api.github.com/users/ski-ski/following{/other_user}',
            gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/ski-ski/subscriptions',
            organizations_url: 'https://api.github.com/users/ski-ski/orgs',
            repos_url: 'https://api.github.com/users/ski-ski/repos',
            events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/ski-ski/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 95143360,
            name: 'skiski-app',
            full_name: 'ski-ski/skiski-app',
            owner: {
              login: 'ski-ski',
              id: 29638033,
              avatar_url:
        'https://avatars3.githubusercontent.com/u/29638033?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/ski-ski',
              html_url: 'https://github.com/ski-ski',
              followers_url: 'https://api.github.com/users/ski-ski/followers',
              following_url:
        'https://api.github.com/users/ski-ski/following{/other_user}',
              gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
              starred_url:
        'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
              subscriptions_url:
        'https://api.github.com/users/ski-ski/subscriptions',
              organizations_url: 'https://api.github.com/users/ski-ski/orgs',
              repos_url: 'https://api.github.com/users/ski-ski/repos',
              events_url:
        'https://api.github.com/users/ski-ski/events{/privacy}',
              received_events_url:
        'https://api.github.com/users/ski-ski/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/ski-ski/skiski-app',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/ski-ski/skiski-app',
            forks_url: 'https://api.github.com/repos/ski-ski/skiski-app/forks',
            keys_url:
       'https://api.github.com/repos/ski-ski/skiski-app/keys{/key_id}',
            collaborators_url:
       'https://api.github.com/repos/ski-ski/skiski-app/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/ski-ski/skiski-app/teams',
            hooks_url: 'https://api.github.com/repos/ski-ski/skiski-app/hooks',
            issue_events_url:
       'https://api.github.com/repos/ski-ski/skiski-app/issues/events{/number}',
            events_url:
       'https://api.github.com/repos/ski-ski/skiski-app/events',
            assignees_url:
       'https://api.github.com/repos/ski-ski/skiski-app/assignees{/user}',
            branches_url:
       'https://api.github.com/repos/ski-ski/skiski-app/branches{/branch}',
            tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/tags',
            blobs_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/blobs{/sha}',
            git_tags_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/tags{/sha}',
            git_refs_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/refs{/sha}',
            trees_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/trees{/sha}',
            statuses_url:
       'https://api.github.com/repos/ski-ski/skiski-app/statuses/{sha}',
            languages_url:
       'https://api.github.com/repos/ski-ski/skiski-app/languages',
            stargazers_url:
       'https://api.github.com/repos/ski-ski/skiski-app/stargazers',
            contributors_url:
       'https://api.github.com/repos/ski-ski/skiski-app/contributors',
            subscribers_url:
       'https://api.github.com/repos/ski-ski/skiski-app/subscribers',
            subscription_url:
       'https://api.github.com/repos/ski-ski/skiski-app/subscription',
            commits_url:
       'https://api.github.com/repos/ski-ski/skiski-app/commits{/sha}',
            git_commits_url:
       'https://api.github.com/repos/ski-ski/skiski-app/git/commits{/sha}',
            comments_url:
       'https://api.github.com/repos/ski-ski/skiski-app/comments{/number}',
            issue_comment_url:
       'https://api.github.com/repos/ski-ski/skiski-app/issues/comments{/number}',
            contents_url:
       'https://api.github.com/repos/ski-ski/skiski-app/contents/{+path}',
            compare_url:
       'https://api.github.com/repos/ski-ski/skiski-app/compare/{base}...{head}',
            merges_url:
       'https://api.github.com/repos/ski-ski/skiski-app/merges',
            archive_url:
       'https://api.github.com/repos/ski-ski/skiski-app/{archive_format}{/ref}',
            downloads_url:
       'https://api.github.com/repos/ski-ski/skiski-app/downloads',
            issues_url:
       'https://api.github.com/repos/ski-ski/skiski-app/issues{/number}',
            pulls_url:
       'https://api.github.com/repos/ski-ski/skiski-app/pulls{/number}',
            milestones_url:
       'https://api.github.com/repos/ski-ski/skiski-app/milestones{/number}',
            notifications_url:
       'https://api.github.com/repos/ski-ski/skiski-app/notifications{?since,all,participating}',
            labels_url:
       'https://api.github.com/repos/ski-ski/skiski-app/labels{/name}',
            releases_url:
       'https://api.github.com/repos/ski-ski/skiski-app/releases{/id}',
            deployments_url:
       'https://api.github.com/repos/ski-ski/skiski-app/deployments',
            created_at: '2017-06-22T18:08:21Z',
            updated_at: '2017-06-23T22:48:38Z',
            pushed_at: '2017-08-03T02:23:38Z',
            git_url: 'git://github.com/ski-ski/skiski-app.git',
            ssh_url: 'git@github.com:ski-ski/skiski-app.git',
            clone_url: 'https://github.com/ski-ski/skiski-app.git',
            svn_url: 'https://github.com/ski-ski/skiski-app',
            homepage: null,
            size: 472,
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
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/68',
          },
          html: {
            href: 'https://github.com/ski-ski/skiski-app/pull/68',
          },
          issue: {
            href: 'https://api.github.com/repos/ski-ski/skiski-app/issues/68',
          },
          comments: {
            href:
       'https://api.github.com/repos/ski-ski/skiski-app/issues/68/comments',
          },
          review_comments: {
            href:
       'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/comments',
          },
          review_comment: {
            href:
       'https://api.github.com/repos/ski-ski/skiski-app/pulls/comments{/number}',
          },
          commits: {
            href:
       'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/commits',
          },
          statuses: {
            href:
       'https://api.github.com/repos/ski-ski/skiski-app/statuses/324b698a9e7193a0abb42cf7d5d6d8a777b7bfbf',
          },
        },
      },
    ];
    const fetchPullRequestResponse = {
      url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/68',
      id: 133846622,
      html_url: 'https://github.com/ski-ski/skiski-app/pull/68',
      diff_url: 'https://github.com/ski-ski/skiski-app/pull/68.diff',
      patch_url: 'https://github.com/ski-ski/skiski-app/pull/68.patch',
      issue_url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/68',
      number: 68,
      state: 'open',
      locked: false,
      title: 'Test',
      user: {
        login: 'michaelmurray6298',
        id: 24865792,
        avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/michaelmurray6298',
        html_url: 'https://github.com/michaelmurray6298',
        followers_url:
     'https://api.github.com/users/michaelmurray6298/followers',
        following_url:
     'https://api.github.com/users/michaelmurray6298/following{/other_user}',
        gists_url:
     'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
        starred_url:
     'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
        subscriptions_url:
     'https://api.github.com/users/michaelmurray6298/subscriptions',
        organizations_url:
     'https://api.github.com/users/michaelmurray6298/orgs',
        repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
        events_url:
     'https://api.github.com/users/michaelmurray6298/events{/privacy}',
        received_events_url:
     'https://api.github.com/users/michaelmurray6298/received_events',
        type: 'User',
        site_admin: false,
      },
      body: '',
      created_at: '2017-08-03T02:23:38Z',
      updated_at: '2017-08-03T02:23:38Z',
      closed_at: null,
      merged_at: null,
      merge_commit_sha: '28484dbd354a30cdf733ed28b4e40d1ae0048582',
      assignee: null,
      assignees: [],
      requested_reviewers: [],
      milestone: null,
      commits_url:
    'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/commits',
      review_comments_url:
    'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/comments',
      review_comment_url:
    'https://api.github.com/repos/ski-ski/skiski-app/pulls/comments{/number}',
      comments_url:
    'https://api.github.com/repos/ski-ski/skiski-app/issues/68/comments',
      statuses_url:
    'https://api.github.com/repos/ski-ski/skiski-app/statuses/324b698a9e7193a0abb42cf7d5d6d8a777b7bfbf',
      head: {
        label: 'ski-ski:master',
        ref: 'master',
        sha: '324b698a9e7193a0abb42cf7d5d6d8a777b7bfbf',
        user: {
          login: 'ski-ski',
          id: 29638033,
          avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ski-ski',
          html_url: 'https://github.com/ski-ski',
          followers_url: 'https://api.github.com/users/ski-ski/followers',
          following_url:
      'https://api.github.com/users/ski-ski/following{/other_user}',
          gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/ski-ski/subscriptions',
          organizations_url: 'https://api.github.com/users/ski-ski/orgs',
          repos_url: 'https://api.github.com/users/ski-ski/repos',
          events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/ski-ski/received_events',
          type: 'Organization',
          site_admin: false,
        },
        repo: {
          id: 95143360,
          name: 'skiski-app',
          full_name: 'ski-ski/skiski-app',
          owner: {
            login: 'ski-ski',
            id: 29638033,
            avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/ski-ski',
            html_url: 'https://github.com/ski-ski',
            followers_url: 'https://api.github.com/users/ski-ski/followers',
            following_url:
       'https://api.github.com/users/ski-ski/following{/other_user}',
            gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/ski-ski/subscriptions',
            organizations_url: 'https://api.github.com/users/ski-ski/orgs',
            repos_url: 'https://api.github.com/users/ski-ski/repos',
            events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/ski-ski/received_events',
            type: 'Organization',
            site_admin: false,
          },
          private: false,
          html_url: 'https://github.com/ski-ski/skiski-app',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/ski-ski/skiski-app',
          forks_url: 'https://api.github.com/repos/ski-ski/skiski-app/forks',
          keys_url:
      'https://api.github.com/repos/ski-ski/skiski-app/keys{/key_id}',
          collaborators_url:
      'https://api.github.com/repos/ski-ski/skiski-app/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/ski-ski/skiski-app/teams',
          hooks_url: 'https://api.github.com/repos/ski-ski/skiski-app/hooks',
          issue_events_url:
      'https://api.github.com/repos/ski-ski/skiski-app/issues/events{/number}',
          events_url: 'https://api.github.com/repos/ski-ski/skiski-app/events',
          assignees_url:
      'https://api.github.com/repos/ski-ski/skiski-app/assignees{/user}',
          branches_url:
      'https://api.github.com/repos/ski-ski/skiski-app/branches{/branch}',
          tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/tags',
          blobs_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/blobs{/sha}',
          git_tags_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/tags{/sha}',
          git_refs_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/refs{/sha}',
          trees_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/trees{/sha}',
          statuses_url:
      'https://api.github.com/repos/ski-ski/skiski-app/statuses/{sha}',
          languages_url:
      'https://api.github.com/repos/ski-ski/skiski-app/languages',
          stargazers_url:
      'https://api.github.com/repos/ski-ski/skiski-app/stargazers',
          contributors_url:
      'https://api.github.com/repos/ski-ski/skiski-app/contributors',
          subscribers_url:
      'https://api.github.com/repos/ski-ski/skiski-app/subscribers',
          subscription_url:
      'https://api.github.com/repos/ski-ski/skiski-app/subscription',
          commits_url:
      'https://api.github.com/repos/ski-ski/skiski-app/commits{/sha}',
          git_commits_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/commits{/sha}',
          comments_url:
      'https://api.github.com/repos/ski-ski/skiski-app/comments{/number}',
          issue_comment_url:
      'https://api.github.com/repos/ski-ski/skiski-app/issues/comments{/number}',
          contents_url:
      'https://api.github.com/repos/ski-ski/skiski-app/contents/{+path}',
          compare_url:
      'https://api.github.com/repos/ski-ski/skiski-app/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/ski-ski/skiski-app/merges',
          archive_url:
      'https://api.github.com/repos/ski-ski/skiski-app/{archive_format}{/ref}',
          downloads_url:
      'https://api.github.com/repos/ski-ski/skiski-app/downloads',
          issues_url:
      'https://api.github.com/repos/ski-ski/skiski-app/issues{/number}',
          pulls_url:
      'https://api.github.com/repos/ski-ski/skiski-app/pulls{/number}',
          milestones_url:
      'https://api.github.com/repos/ski-ski/skiski-app/milestones{/number}',
          notifications_url:
      'https://api.github.com/repos/ski-ski/skiski-app/notifications{?since,all,participating}',
          labels_url:
      'https://api.github.com/repos/ski-ski/skiski-app/labels{/name}',
          releases_url:
      'https://api.github.com/repos/ski-ski/skiski-app/releases{/id}',
          deployments_url:
      'https://api.github.com/repos/ski-ski/skiski-app/deployments',
          created_at: '2017-06-22T18:08:21Z',
          updated_at: '2017-06-23T22:48:38Z',
          pushed_at: '2017-08-03T02:23:38Z',
          git_url: 'git://github.com/ski-ski/skiski-app.git',
          ssh_url: 'git@github.com:ski-ski/skiski-app.git',
          clone_url: 'https://github.com/ski-ski/skiski-app.git',
          svn_url: 'https://github.com/ski-ski/skiski-app',
          homepage: null,
          size: 472,
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
        },
      },
      base: {
        label: 'ski-ski:dev',
        ref: 'dev',
        sha: '9747c4057a307951c067e0b6c3342d3c04287634',
        user: {
          login: 'ski-ski',
          id: 29638033,
          avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ski-ski',
          html_url: 'https://github.com/ski-ski',
          followers_url: 'https://api.github.com/users/ski-ski/followers',
          following_url:
      'https://api.github.com/users/ski-ski/following{/other_user}',
          gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/ski-ski/subscriptions',
          organizations_url: 'https://api.github.com/users/ski-ski/orgs',
          repos_url: 'https://api.github.com/users/ski-ski/repos',
          events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/ski-ski/received_events',
          type: 'Organization',
          site_admin: false,
        },
        repo: {
          id: 95143360,
          name: 'skiski-app',
          full_name: 'ski-ski/skiski-app',
          owner: {
            login: 'ski-ski',
            id: 29638033,
            avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/ski-ski',
            html_url: 'https://github.com/ski-ski',
            followers_url: 'https://api.github.com/users/ski-ski/followers',
            following_url:
       'https://api.github.com/users/ski-ski/following{/other_user}',
            gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
            starred_url:
       'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
            subscriptions_url:
       'https://api.github.com/users/ski-ski/subscriptions',
            organizations_url: 'https://api.github.com/users/ski-ski/orgs',
            repos_url: 'https://api.github.com/users/ski-ski/repos',
            events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
            received_events_url:
       'https://api.github.com/users/ski-ski/received_events',
            type: 'Organization',
            site_admin: false,
          },
          private: false,
          html_url: 'https://github.com/ski-ski/skiski-app',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/ski-ski/skiski-app',
          forks_url: 'https://api.github.com/repos/ski-ski/skiski-app/forks',
          keys_url:
      'https://api.github.com/repos/ski-ski/skiski-app/keys{/key_id}',
          collaborators_url:
      'https://api.github.com/repos/ski-ski/skiski-app/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/ski-ski/skiski-app/teams',
          hooks_url: 'https://api.github.com/repos/ski-ski/skiski-app/hooks',
          issue_events_url:
      'https://api.github.com/repos/ski-ski/skiski-app/issues/events{/number}',
          events_url: 'https://api.github.com/repos/ski-ski/skiski-app/events',
          assignees_url:
      'https://api.github.com/repos/ski-ski/skiski-app/assignees{/user}',
          branches_url:
      'https://api.github.com/repos/ski-ski/skiski-app/branches{/branch}',
          tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/tags',
          blobs_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/blobs{/sha}',
          git_tags_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/tags{/sha}',
          git_refs_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/refs{/sha}',
          trees_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/trees{/sha}',
          statuses_url:
      'https://api.github.com/repos/ski-ski/skiski-app/statuses/{sha}',
          languages_url:
      'https://api.github.com/repos/ski-ski/skiski-app/languages',
          stargazers_url:
      'https://api.github.com/repos/ski-ski/skiski-app/stargazers',
          contributors_url:
      'https://api.github.com/repos/ski-ski/skiski-app/contributors',
          subscribers_url:
      'https://api.github.com/repos/ski-ski/skiski-app/subscribers',
          subscription_url:
      'https://api.github.com/repos/ski-ski/skiski-app/subscription',
          commits_url:
      'https://api.github.com/repos/ski-ski/skiski-app/commits{/sha}',
          git_commits_url:
      'https://api.github.com/repos/ski-ski/skiski-app/git/commits{/sha}',
          comments_url:
      'https://api.github.com/repos/ski-ski/skiski-app/comments{/number}',
          issue_comment_url:
      'https://api.github.com/repos/ski-ski/skiski-app/issues/comments{/number}',
          contents_url:
      'https://api.github.com/repos/ski-ski/skiski-app/contents/{+path}',
          compare_url:
      'https://api.github.com/repos/ski-ski/skiski-app/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/ski-ski/skiski-app/merges',
          archive_url:
      'https://api.github.com/repos/ski-ski/skiski-app/{archive_format}{/ref}',
          downloads_url:
      'https://api.github.com/repos/ski-ski/skiski-app/downloads',
          issues_url:
      'https://api.github.com/repos/ski-ski/skiski-app/issues{/number}',
          pulls_url:
      'https://api.github.com/repos/ski-ski/skiski-app/pulls{/number}',
          milestones_url:
      'https://api.github.com/repos/ski-ski/skiski-app/milestones{/number}',
          notifications_url:
      'https://api.github.com/repos/ski-ski/skiski-app/notifications{?since,all,participating}',
          labels_url:
      'https://api.github.com/repos/ski-ski/skiski-app/labels{/name}',
          releases_url:
      'https://api.github.com/repos/ski-ski/skiski-app/releases{/id}',
          deployments_url:
      'https://api.github.com/repos/ski-ski/skiski-app/deployments',
          created_at: '2017-06-22T18:08:21Z',
          updated_at: '2017-06-23T22:48:38Z',
          pushed_at: '2017-08-03T02:23:38Z',
          git_url: 'git://github.com/ski-ski/skiski-app.git',
          ssh_url: 'git@github.com:ski-ski/skiski-app.git',
          clone_url: 'https://github.com/ski-ski/skiski-app.git',
          svn_url: 'https://github.com/ski-ski/skiski-app',
          homepage: null,
          size: 472,
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
        },
      },
      _links: {
        self: {
          href: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/68',
        },
        html: {
          href: 'https://github.com/ski-ski/skiski-app/pull/68',
        },
        issue: {
          href: 'https://api.github.com/repos/ski-ski/skiski-app/issues/68',
        },
        comments: {
          href:
      'https://api.github.com/repos/ski-ski/skiski-app/issues/68/comments',
        },
        review_comments: {
          href:
      'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/comments',
        },
        review_comment: {
          href:
      'https://api.github.com/repos/ski-ski/skiski-app/pulls/comments{/number}',
        },
        commits: {
          href:
      'https://api.github.com/repos/ski-ski/skiski-app/pulls/68/commits',
        },
        statuses: {
          href:
      'https://api.github.com/repos/ski-ski/skiski-app/statuses/324b698a9e7193a0abb42cf7d5d6d8a777b7bfbf',
        },
      },
      merged: false,
      mergeable: true,
      rebaseable: false,
      mergeable_state: 'clean',
      merged_by: null,
      comments: 0,
      review_comments: 0,
      maintainer_can_modify: false,
      commits: 12,
      additions: 12,
      deletions: 2,
      changed_files: 6,
    };
    nock('https://api.github.com')
      .get(`/repos/ski-ski/skiski-app/pulls?access_token=${process.env.TKN}`)
      .reply(200, fetchPullsResponse);
    nock('https://api.github.com')
      .get(`/repos/ski-ski/skiski-app/pulls/68?access_token=${process.env.TKN}`)
      .reply(200, fetchPullRequestResponse);
    const repoPR = await data.pullRequest;
    expect(repoPR[0].pullRequest.id).to.equal(fetchPullRequestResponse.id);
  });
});
