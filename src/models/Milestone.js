class Milestone {
  constructor(milestone) {
    this.milestone = milestone;
<<<<<<< HEAD
    this.id = this.milestone.id;
    this.title = this.milestone.title;
    this.openIssues = this.milestone.open_issues;
    this.closedIssues = this.milestone.closed_issues;
    this.dueOn = this.milestone.due_on;
=======
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
>>>>>>> Complete milestone model and resolver
  }
}

module.exports = Milestone;
