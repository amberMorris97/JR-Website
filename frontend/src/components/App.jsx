// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header.jsx';
import Main from './Home/Main.jsx'

import Login from './Admin/Login.jsx'
import Blog from './Blog/Main.jsx';
import SinglePost from './Blog/SinglePost.jsx';
import NewPost from './Blog/NewPost.jsx';
import User from '../redux/actions/authActions';
import Nav from './Admin/Nav.jsx';
import ServicesMain from './Services.jsx';
import AboutMain from './About.jsx';
import Contact from './Contact.jsx';
import Testimonials from './Testimonials.jsx';
import ResourcesMain from './ResourcesMain.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { fetchBlogPosts } from '../redux/actions/blogActions';

const App = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState('home');

  useEffect(() => {
    const user = new User();
    dispatch(user.load());
    dispatch(fetchBlogPosts());
  }, []);

  if (view === 'nav') {
    return <Nav />
  }

  if (view === 'protected') {
    return <ProtectedRoute />
  }

  return (
    <Router>
    <div id="app-content">
   <Header setView={setView} />
   <Switch>
     <Route exact path="/" component={Main} />
     <Route exact path="/home" component={Main} />
     <Route exact path="/blog" render={() => <Blog fullscreen="fullscreen" />} />
     <Route exact path="/blog/:id" component={SinglePost} />
     <Route exact path="/create-blog-post" component={NewPost} />
     <Route exact path="/services" component={ServicesMain} />
     <Route exact path="/about" component={AboutMain} />
     <Route exact path="/testimonials" component={Testimonials} />
     <Route path="/contact" component={Contact} />
     <Route path="/resources" component={ResourcesMain} />
     <Route path="/login" render={ () => <Login setView={setView} />} />
   </Switch>
    </div>
   </Router>
  );
};

export default App;


// Testimonials
  // figure out why CL photo is not showing
  // STYLING
    // this could probably look better

// Performance
  // Figure out why it takes so long to load *look into caching*
  // Consider implementing a loading wheel to avoid multiple rendering of components (Can be explored later these issues pertain only to Jane, significant spot where this happens: Login checking to see if user is already logged in)

// Bugs
  // Login component acts weird when you enter invalid credentials multiple times
    /* SEARCH: Something like how to notify client when error happens on the backend, this will probably be a backend solution. */

// MISC
  // Make Test Suite
    // maybe

// Security
  // Restrict DB access
  // Add domain name