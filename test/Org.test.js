/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
require('dotenv').config();
const nock = require('nock');
const Org = require('../src/models/Org');
const Repo = require('../src/models/Repo');

describe('Org model', () => {
  const org = new Org({
    login: 'ski-ski',
    id: 29638033,
    url: 'https://api.github.com/orgs/ski-ski',
    repos_url: 'https://api.github.com/orgs/ski-ski/repos',
    events_url: 'https://api.github.com/orgs/ski-ski/events',
    hooks_url: 'https://api.github.com/orgs/ski-ski/hooks',
    issues_url: 'https://api.github.com/orgs/ski-ski/issues',
    members_url: 'https://api.github.com/orgs/ski-ski/members{/member}',
    public_members_url: 'https://api.github.com/orgs/ski-ski/public_members{/member}',
    avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
    description: null,
    has_organization_projects: true,
    has_repository_projects: true,
    public_repos: 2,
    public_gists: 0,
    followers: 0,
    following: 0,
    html_url: 'https://github.com/ski-ski',
    created_at: '2017-06-22T18:04:32Z',
    updated_at: '2017-06-22T18:05:56Z',
    type: 'Organization',
    total_private_repos: 0,
    owned_private_repos: 0,
    private_gists: 0,
    disk_usage: 472,
    collaborators: 0,
    billing_email: 'michaelmurray6298@gmail.com',
    plan: {
      name: 'free',
      space: 976562499,
      private_repos: 0,
      filled_seats: 2,
      seats: 0,
    },
    default_repository_permission: 'admin',
    members_can_create_repositories: true,
  });

  it('accepts passed in arguments', () => {
    expect(org.id).to.equal(29638033);
    expect(org.login).to.equal('ski-ski');
    expect(org.url).to.equal('https://api.github.com/orgs/ski-ski');
    expect(org.avatarUrl).to.equal('https://avatars3.githubusercontent.com/u/29638033?v=4');
    expect(org.reposUrl).to.equal(`https://api.github.com/orgs/ski-ski/repos?access_token=${process.env.TKN}`);
  });
  after((done) => {
    done();
  });

  it('should fetch the user orgs', async () => {
    const reposFetch = [
      {
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
          following_url: 'https://api.github.com/users/ski-ski/following{/other_user}',
          gists_url: 'https://api.github.com/users/ski-ski/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/ski-ski/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/ski-ski/subscriptions',
          organizations_url: 'https://api.github.com/users/ski-ski/orgs',
          repos_url: 'https://api.github.com/users/ski-ski/repos',
          events_url: 'https://api.github.com/users/ski-ski/events{/privacy}',
          received_events_url: 'https://api.github.com/users/ski-ski/received_events',
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
        collaborators_url: 'https://api.github.com/repos/ski-ski/skiski-app/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ski-ski/skiski-app/teams',
        hooks_url: 'https://api.github.com/repos/ski-ski/skiski-app/hooks',
        issue_events_url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ski-ski/skiski-app/events',
        assignees_url: 'https://api.github.com/repos/ski-ski/skiski-app/assignees{/user}',
        branches_url: 'https://api.github.com/repos/ski-ski/skiski-app/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/tags',
        blobs_url: 'https://api.github.com/repos/ski-ski/skiski-app/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/ski-ski/skiski-app/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/ski-ski/skiski-app/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/ski-ski/skiski-app/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/ski-ski/skiski-app/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/ski-ski/skiski-app/languages',
        stargazers_url: 'https://api.github.com/repos/ski-ski/skiski-app/stargazers',
        contributors_url: 'https://api.github.com/repos/ski-ski/skiski-app/contributors',
        subscribers_url: 'https://api.github.com/repos/ski-ski/skiski-app/subscribers',
        subscription_url: 'https://api.github.com/repos/ski-ski/skiski-app/subscription',
        commits_url: 'https://api.github.com/repos/ski-ski/skiski-app/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/ski-ski/skiski-app/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/ski-ski/skiski-app/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/ski-ski/skiski-app/contents/{+path}',
        compare_url: 'https://api.github.com/repos/ski-ski/skiski-app/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ski-ski/skiski-app/merges',
        archive_url: 'https://api.github.com/repos/ski-ski/skiski-app/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/ski-ski/skiski-app/downloads',
        issues_url: 'https://api.github.com/repos/ski-ski/skiski-app/issues{/number}',
        pulls_url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/ski-ski/skiski-app/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/ski-ski/skiski-app/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/ski-ski/skiski-app/labels{/name}',
        releases_url: 'https://api.github.com/repos/ski-ski/skiski-app/releases{/id}',
        deployments_url: 'https://api.github.com/repos/ski-ski/skiski-app/deployments',
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
        permissions: {
          admin: false,
          push: false,
          pull: true,
        },
      },
    ];
    nock('https://api.github.com')
      .get(`/orgs/ski-ski/repos?access_token=${process.env.TKN}`)
      .reply(200, reposFetch);
    const singleOrg = await org.orgRepos;
    expect(singleOrg[0]).to.be.an.instanceof(Repo);
  });
  after((done) => {
    done();
  });
});
