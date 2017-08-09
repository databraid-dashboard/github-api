<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Refactor User and Issue model to match new schema layout
/* eslint-disable no-param-reassign */
const Label = require('./Label');

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

<<<<<<< HEAD
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
=======
>>>>>>> Refactor User and Issue model to match new schema layout
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

  labels() {
    return this.issue.labels;
  }

  state() {
    return this.issue.state;
  }

  number() {
    return this.issue.number;
>>>>>>> Initial issues model
  }
<<<<<<< HEAD
=======
>>>>>>> Refactor model format
=======

  get label() {
    return this.labels.map(label => new Label(label));
  }
>>>>>>> Add Label model
}

module.exports = Issue;
