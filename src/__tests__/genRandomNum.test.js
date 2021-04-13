import genRandomNum from '../helpers/randomNum';

describe('genRandomNum', () => {
  it('return an integer', () => {
    const num = genRandomNum(10);
    expect(typeof num).toBe('number');
  });
  it('returns a number >=  0', () => {
    const num = genRandomNum(10);
    expect(num).toBeGreaterThan(-1);
  });
  it('returns a number less than the arguement given to function', () => {
    const num = genRandomNum(10);
    expect(num).toBeLessThan(11);
  });
  it('does not return floats', () => {
    const num = genRandomNum(30);
    expect(Number.isInteger(num)).not.toBe(false);
  });
});