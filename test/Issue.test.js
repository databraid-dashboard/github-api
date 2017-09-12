/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
const { issue } = require('./IssueMock');
const Issue = require('../src/models/Issue');

describe('Issue model', () => {
  const newIssue = new Issue(issue);

  it('accepts an issue as passed in arguments', () => {
    expect(newIssue.id).to.equal(247537446);
    expect(newIssue.title).to.equal('Test');
    expect(newIssue.labels).to.deep.equal([]);
    expect(newIssue.state).to.equal('closed');
    expect(newIssue.number).to.equal(5);
    expect(newIssue.assignee).to.equal('Not assigned');
    expect(newIssue.assigneeAvatar).to.equal('Not assigned');
  });
  after((done) => {
    done();
  });
});
