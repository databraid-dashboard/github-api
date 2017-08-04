class PullRequest {
  constructor(pullRequest) {
    this.pullRequest = pullRequest;
    this.id = this.pullRequest.id;
    this.number = this.pullRequest.number;
    this.title = this.pullRequest.title;
    this.submittedBy = this.pullRequest.user.login;
    this.createdAt = this.pullRequest.created_at;
    this.mergeable = this.pullRequest.mergeable;
  }
}

module.exports = PullRequest;
