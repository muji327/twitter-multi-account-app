import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import AccountList from './components/AccountList';

const App = () => {
  const [accounts, setAccounts] = useState([]);

  const addAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  return (
    <div className="app">
      <h1>Twitterマルチアカウント管理</h1>
      <LoginForm onAddAccount={addAccount} />
      <AccountList accounts={accounts} />
    </div>
  );
};

export default App;
