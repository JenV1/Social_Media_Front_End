import React from 'react';
import PropTypes from 'prop-types';
import './FeedPage.css';

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
    <PostList />
  </div>
  );
};


export default FeedPage;
