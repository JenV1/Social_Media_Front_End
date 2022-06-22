import React from 'react';
import PropTypes from 'prop-types';
import './FeedPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import PostList from './feed_components/PostList';


const FeedPage = ({checkLogInStatus, pageRedirect}) => {
  
  window.onload = function(){
    const loggedIn = checkLogInStatus()
    if(!loggedIn){
      pageRedirect("http://localhost:3000/")
    }
  }
  return(
  <div className="FeedPage">
    <Header open="true"  />
    <PostList />
    <Footer />
  </div>
  );
};


export default FeedPage;
