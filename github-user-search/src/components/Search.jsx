import { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [form, setForm] = useState({ username: '', location: '', minRepos: '' });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const results = await searchUsers(form);
      setUsers(results);
    } catch (err) {
      setError("Looks like we can’t find users with that criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min. Repos"
          value={form.minRepos}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 p-4 border rounded shadow-sm">
            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-lg font-bold">{user.login}</h3>
              <a href={user.html_url} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

["fetchUserData"]