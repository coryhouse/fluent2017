import {expect} from 'chai';
import {add} from './math';

describe('add', () => {
  it('should add two integers', () => {
    const result = add(2,3);
    expect(result).to.equal(5);
  });
});
