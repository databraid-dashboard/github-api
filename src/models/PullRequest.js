class PullRequest {
  constructor(pullRequest) {
    this.pullRequest = pullRequest;
  }
  id() {
    return this.pullRequest.id;
  }
  number() {
    return this.pullRequest.number;
  }

  title() {
    return this.pullRequest.title;
  }
  submittedBy() {
    return this.pullRequest.user.login;
  }
  createdAt() {
    return this.pullRequest.created_at;
  }
  mergeability() {
    return this.pullRequest.mergeable;
  }
}

module.exports = PullRequest;
