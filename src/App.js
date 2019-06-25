import React from 'react';
import './App.css';

import Header from './Header';
import NewPost from './NewPost';
import Posts from './Posts';
import Suggestions from './Suggestions';

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <Header />
      <NewPost />
      <div className="row">
        <Posts />
        <Suggestions />
      </div>
    </div>
    );
  }
}

export default App;
