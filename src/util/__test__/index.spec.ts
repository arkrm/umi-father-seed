import { getRandomRound } from '../index';

describe('util', () => {
  it('test util - getRandomRound', () => {
    const min = 1;
    const max = 10;
    const result = getRandomRound(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
