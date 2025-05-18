import React, { useState } from 'react';

const LoginForm = ({ onAddAccount }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onAddAccount({ username });
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Twitterユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">アカウント追加</button>
    </form>
  );
};

export default LoginForm;
