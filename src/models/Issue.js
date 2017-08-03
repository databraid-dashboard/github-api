class Issue {
  constructor(issue) {
    this.issue = issue;
    this.id = this.issue.id;
    this.title = this.issue.title;
    this.labels = this.issue.labels;
    this.state = this.issue.state;
    this.number = this.issue.number;
  }
  assigneeLogin() {
    return this.issue.assignees.map(assignee => assignee.login);
  }

  assigneeAvatar() {
    return this.issue.assignees.map(assignee => assignee.avatar_url);
  }
}

module.exports = Issue;
