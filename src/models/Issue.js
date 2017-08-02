class Issue {
  constructor(issue) {
    this.issue = issue;
  }
  title() {
    return this.issue.title;
  }

  id() {
    return this.issue.id;
  }
  assigneeLogin() {
    return this.issue.assignees.map(assignee => assignee.login);
  }
  assigneeAvatar() {
    return this.issue.assignees.map(assignee => assignee.avatar_url);
  }
  labels() {
    return this.issue.labels;
  }

  number() {
    return this.issue.number;
  }
}

module.exports = Issue;
