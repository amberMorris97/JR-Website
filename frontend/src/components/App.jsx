import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUser from '../redux/actions/authActions';
import Login from './User/Login.jsx';

const App = () => {
  const dispatch = useDispatch();
  const [user, updateUser] = useState(null);

  useEffect(() => {
    // dispatch(loadUser());
    // dispatch({ type: 'USER_LOADING'})
  }, [user]);

  return (
    <div>
      <h1>App</h1>
      <Login login={(user) => updateUser(user)}/>
      <button onClick={() => dispatch({type: 'LOGOUT_SUCCESS'})}>logout</button>
    </div>
  );
};

export default App;

// -