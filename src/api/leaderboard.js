const defaultGameId = 'zJnlfT2dyqZouxtRS4Ho';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const getUserScores = async (gameId = defaultGameId) => {
  const gameScoresURL = `${baseURL}games/${gameId}/scores`;

  const data = await fetch(gameScoresURL);
  const userScores = await data.json();

  return userScores;
};
const postUserScore = async (userName, userScore, gameId = defaultGameId) => {
  const gameScoresURL = `${baseURL}games/${gameId}/scores`;

  const res = await fetch(gameScoresURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),

  });

  await res.json();
  return res;
};

export { getUserScores, postUserScore };