<<<<<<< HEAD
/* eslint-disable no-param-reassign */
function getAssignee(assignee) {
  if (assignee === null) {
    assignee = 'Not assigned';
    return assignee;
  }
  return assignee.login;
}

function getAssigneeAvatar(assignee) {
  if (assignee === null) {
    assignee = 'Not assigned';
    return assignee;
  }
  return assignee.avatar_url;
}

class Issue {
  constructor(issue) {
    this.issue = issue;
    this.id = this.issue.id;
    this.title = this.issue.title;
    this.labels = this.issue.labels;
    this.state = this.issue.state;
    this.number = this.issue.number;
    this.assignee = getAssignee(this.issue.assignee);
    this.assigneeAvatar = getAssigneeAvatar(this.issue.assignee);
=======
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
>>>>>>> Initial issues model
  }
}

module.exports = Issue;
