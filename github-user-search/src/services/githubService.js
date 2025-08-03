import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

const headers = import.meta.env.VITE_APP_GITHUB_API_KEY
  ? { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` }
  : {};

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const finalQuery = query.join(' ');

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(finalQuery)}`, { headers });

  return response.data.items;
};
