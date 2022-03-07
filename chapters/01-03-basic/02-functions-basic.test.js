//! Test normal function

import { functionThatHatesCats } from './02-functions-basic';

//! Test errors
describe('Given functionThatHatesCats function', () => {
  describe('When it receives cat or cats', () => {
    test('It should throw I HATE CATS!', () => {
      /*       expect(() => functionThatHatesCats('cat')).toThrow();*/
      try {
        functionThatHatesCats('cat');
      } catch (err) {
        expect(err).toEqual(new Error('I HATE CATS!'));
      }
    });
  });
  describe('When it receives something different to cat', () => {
    test('It should throw I HATE CATS!', () => {
      expect(functionThatHatesCats('dogs')).toBe('I love dogs!');
    });
  });
});
