import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  }

  return (
    <div className={isLoggedIn ? 'logged-in' : 'logged-out'}>
      <h1>{isLoggedIn ? `Welcome back, ${username}!` : 'Login to your account'}</h1>
      {
        isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </>
        )
      }
    </div>
  );
}

export default App;
