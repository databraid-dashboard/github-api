/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');
require('chai').use(require('sinon-chai'));
const Issue = require('../src/models/Issue');

describe('Issue model', () => {
  it('constructor accepts a passed in argument', () => {
    const issue = new Issue({ issue: { id: 1 } });
    expect(issue.issue.issue.id).to.equal(1);
  });

  it('has title method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.title).to.exist;
  });

  it('has id method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.id).to.exist;
  });

  it('has assigneeLogin method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.assigneeLogin).to.exist;
  });

  it('has assigneeAvatar method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.assigneeAvatar).to.exist;
  });

  it('has labels method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.labels).to.exist;
  });

  it('has state method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.state).to.exist;
  });

  it('has number method', () => {
    const issue = sinon.createStubInstance(Issue);
    expect(issue.number).to.exist;
  });
});
