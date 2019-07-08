import React from 'react';
import './App.css';

import Header from './Header';
import NewPost from './NewPost';
import Posts from './Posts';
import Suggestions from './Suggestions';

const TENOR_API_KEY = '';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          image: 'assets/img1.jpg',
          avatar: 'assets/avatar1.jpg',
          name: 'Alice',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin, nisl nec egestas sollicitudin, est tortor egestas quam, nec venenatis ex libero cursus quam. Donec non nulla a mauris euismod consectetur eget quis lorem. Suspendisse quis orci non magna elementum rhoncus in a nisl. Etiam ipsum arcu, iaculis vel massa ac, vulputate ultricies diam. Aliquam aliquet augue neque, eget euismod ante efficitur sit amet. Cras mi ligula, molestie quis imperdiet at, sagittis quis tellus. Sed pretium enim orci, at feugiat diam blandit posuere. Etiam sit amet hendrerit ligula. Suspendisse ut faucibus felis.'
        },
        {
          image: 'assets/img2.jpg',
          avatar: 'assets/avatar2.jpg',
          name: 'Bob',
          text: 'Integer ex risus, pharetra eu nulla eget, semper pharetra mi.'
        }
      ]
    };
  }

  render() {
    return (
    <div className="container">
      <Header />
      <NewPost />
      <div className="row">
        <Posts posts={this.state.posts} />
        <Suggestions />
      </div>
    </div>
    );
  }
}

export default App;
