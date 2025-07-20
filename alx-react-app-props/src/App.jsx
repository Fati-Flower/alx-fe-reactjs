import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage'; // 👈 Import ProfilePage

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <div>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      <ProfilePage userData={userData} /> {/* 👈 Use ProfilePage */}

      <Header />
      <WelcomeMessage />
      <MainContent />

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>

      <Footer />

      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
["UserContext", "UserContext.Provider", "value"]

export default App;
