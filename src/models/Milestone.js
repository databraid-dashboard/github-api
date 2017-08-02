class Milestone {
  constructor(milestone) {
    this.milestone = milestone;
  }
  id() {
    return this.milestone.id;
  }
  title() {
    return this.milestone.title;
  }
  openIssues() {
    return this.milestone.open_issues;
  }
  closedIssues() {
    return this.milestone.closed_issues;
  }

  dueOn() {
    return this.milestone.due_on;
  }
}

module.exports = Milestone;
