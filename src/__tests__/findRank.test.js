import findRank from '../helpers/findRank';
import topScores from '../helpers/topScores';

describe('findRank', () => {
  const scores = topScores([
    {
      user: 'user1',
      score: '100',
    },
    {
      user: 'user2',
      score: '150',
    },
    {
      user: 'user3',
      score: '99',
    },
    {
      user: 'myplayer',
      score: '101',
    },
  ]);
  it('returns rank of given score among all scores', () => {
    const myPlayerScore = 101;
    const myPlayerRank = findRank(scores, myPlayerScore);
    expect(myPlayerRank).toBe(2);
  });
  it('returns 0 if current player score not found in scores array', () => {
    const myPlayerScore = 103;
    const myPlayerRank = findRank(scores, myPlayerScore);
    expect(myPlayerRank).toBe(0);
  });
});