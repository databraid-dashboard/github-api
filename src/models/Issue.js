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

  get label() {
    return this.labels.map(label => new Label(label));
  }
  get isPR() {
   if (this.issue.hasOwnProperty('pull_request')) {
     return true;
   }
   return false;
 }
}

module.exports = Issue;
