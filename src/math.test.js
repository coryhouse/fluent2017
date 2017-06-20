import {add} from './index';

describe('add', () => {
  it('should add two integers', () => {
    expect(add(2+3)).toEqual(5);
  });
});
