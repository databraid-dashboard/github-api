/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
const Label = require('../src/models/Label');

describe('Label model', () => {
  const label = new Label({ name: 'dev', color: 'purple' });

  it('accepts name and color as passed in arguments', () => {
    expect(label.name).to.equal('dev');
    expect(label.color).to.equal('purple');
  });
  after((done) => {
    done();
  });
});
