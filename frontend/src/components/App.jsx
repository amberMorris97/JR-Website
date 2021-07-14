import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header.jsx';
import User from '../redux/actions/authActions';
import Main from './Landing/Main.jsx'
import About from './About/About.jsx'
import Services from './Services/Services.jsx'
import Testimonials from './Testimonials/Testimonials.jsx'
import Footer from './Footer/Footer.jsx'

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const [loadedUser, setLoadedUser] = useState(null);
  const [view, setView] = useState('home');

  useEffect(() => {
    const loadUser = new User();
    dispatch(loadUser.load());
    setLoadedUser(user);
  }, []);

  // if (!loadedUser) return (<div>wait</div>)

  if (view === 'Login') {
    return <Login setView={setView}/>
  };

  return (
    <div>
      <Header setView={setView} user={user} />
      <Main />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;