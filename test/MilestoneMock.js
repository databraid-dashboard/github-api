const Milestone = require('../src/models/Milestone');

const milestone = new Milestone(
  {
    url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones/1',
    html_url: 'https://github.com/michaelmurray6298/react-inbox/milestone/1',
    labels_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones/1/labels',
    id: 2677830,
    number: 1,
    title: 'Test',
    description: '',
    creator: {
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
    open_issues: 1,
    closed_issues: 1,
    state: 'open',
    created_at: '2017-08-02T22:09:34Z',
    updated_at: '2017-08-02T22:13:26Z',
    due_on: '2017-08-20T07:00:00Z',
    closed_at: null,
  },
);

module.exports = {
  milestone,
};
