import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../../redux/action-creators';

const Auth = () => {
  const userId = useSelector((state) => state.userInfo.id);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ name: userInput }));
  };

  return userId === '' ? (
    <form onSubmit={handleSubmit}>
      <label htmlFor='user-input'>Enter name:</label>
      <input
        id='user-input'
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  ) : (
    <button onClick={() => dispatch(logoutUser())}>Logout</button>
  );
};

export default Auth;
