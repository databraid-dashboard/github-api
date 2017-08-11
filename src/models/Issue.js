/* eslint-disable no-param-reassign */
<<<<<<< HEAD
=======
const Label = require('./Label');

>>>>>>> 3131f36dc5b50f786f6549f3fc7c6fb19951fc95
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
  }
<<<<<<< HEAD
=======

  get label() {
    return this.labels.map(label => new Label(label));
  }
>>>>>>> 3131f36dc5b50f786f6549f3fc7c6fb19951fc95
}

module.exports = Issue;
