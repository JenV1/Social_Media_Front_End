import React from 'react';
import ReactDOM from 'react-dom';
import FeedPage from './FeedPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});