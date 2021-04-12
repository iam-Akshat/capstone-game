import genRandomNum from '../helpers/randomNum';

describe('genRandomNum', () => {
  it('return a random integer between 0 and N', () => {
    const num = genRandomNum(10);
    expect(typeof num).toBe('number');
    expect(num).toBeLessThan(11);
    expect(num).toBeGreaterThan(-1);
  });
});