/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');
require('chai').use(require('sinon-chai'));
const Milestone = require('../src/models/Milestone');

describe('Milestone model', () => {
  it('its constructor accepts a passed in argument', () => {
    const milestone = new Milestone({ id: 1 });
    expect(milestone.milestone.id).to.equal(1);
  });

  it('it has id method', () => {
    const milestone = sinon.createStubInstance(Milestone);
    expect(milestone.id).to.exist;
  });

  it('it has title method', () => {
    const milestone = sinon.createStubInstance(Milestone);
    expect(milestone.title).to.exist;
  });

  it('it has openIssues method', () => {
    const milestone = sinon.createStubInstance(Milestone);
    expect(milestone.openIssues).to.exist;
  });

  it('it has closedIssues method', () => {
    const milestone = sinon.createStubInstance(Milestone);
    expect(milestone.closedIssues).to.exist;
  });

  it('it has dueOn method', () => {
    const milestone = sinon.createStubInstance(Milestone);
    expect(milestone.dueOn).to.exist;
  });
});
