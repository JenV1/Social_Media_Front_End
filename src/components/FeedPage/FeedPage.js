import React from 'react';
import PropTypes from 'prop-types';
import './FeedPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import PostList from './feed_components/PostList';


const FeedPage = () => {

  return(
  <div className="FeedPage">
    <Header open="true"  />
    <PostList />
    <div className="white-space"></div>
    <Footer />
  </div>
  );
};


export default FeedPage;
