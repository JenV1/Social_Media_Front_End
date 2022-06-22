import React from 'react';
import PropTypes from 'prop-types';
import './FeedPage.css';

import PostList from './feed_components/PostList';


const FeedPage = () => (
  <div className="FeedPage">
    <PostList />
  </div>
);


export default FeedPage;
