import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3' }}>
      <UserProfile name="Alice" age={30} bio="Loves exploring new cultures." />
      <UserProfile name="Bob" age={25} bio="Enjoys hiking and outdoor activities." />
    </main>
  );
}

export default MainContent;
