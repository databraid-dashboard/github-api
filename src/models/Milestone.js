class Milestone {
  constructor(milestone) {
    this.milestone = milestone;
    this.id = this.milestone.id;
    this.title = this.milestone.title;
    this.openIssues = this.milestone.open_issues;
    this.closedIssues = this.milestone.closed_issues;
    this.dueOn = this.milestone.due_on;
  }
}

module.exports = Milestone;
