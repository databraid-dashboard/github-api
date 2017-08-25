/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
const milestone = require('./MilestoneMock');

describe('Milestone model', () => {
  it('accepts id, title, open issues, closed issues, and due on as passed in arguments', () => {
    expect(milestone.milestone.id).to.equal(2677830);
    expect(milestone.milestone.title).to.equal('Test');
    expect(milestone.milestone.openIssues).to.equal(1);
    expect(milestone.milestone.closedIssues).to.equal(1);
    expect(milestone.milestone.dueOn).to.equal('2017-08-20T07:00:00Z');
  });
  after((done) => {
    done();
  });
});
