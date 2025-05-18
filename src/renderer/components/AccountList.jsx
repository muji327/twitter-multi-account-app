import React from 'react';

const AccountList = ({ accounts }) => (
  <ul>
    {accounts.map((account, index) => (
      <li key={index}>{account.username}</li>
    ))}
  </ul>
);

export default AccountList;
