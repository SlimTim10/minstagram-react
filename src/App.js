import React from 'react';
import './App.css';

import Header from './Header';
import NewPost from './NewPost';
import Posts from './Posts';
import Suggestions from './Suggestions';

const TENOR_API_KEY = 'Y54FJKUQRSXW';

// Returns a randomly generated ID
const generateRandomID = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  return [...Array(6)].map(x => chars.split('')[Math.floor(Math.random()*chars.length)]).join('');
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: '1',
          image: 'assets/img1.jpg',
          avatar: 'assets/avatar1.jpg',
          name: 'Alice',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin, nisl nec egestas sollicitudin, est tortor egestas quam, nec venenatis ex libero cursus quam. Donec non nulla a mauris euismod consectetur eget quis lorem. Suspendisse quis orci non magna elementum rhoncus in a nisl. Etiam ipsum arcu, iaculis vel massa ac, vulputate ultricies diam. Aliquam aliquet augue neque, eget euismod ante efficitur sit amet. Cras mi ligula, molestie quis imperdiet at, sagittis quis tellus. Sed pretium enim orci, at feugiat diam blandit posuere. Etiam sit amet hendrerit ligula. Suspendisse ut faucibus felis.',
          liked: false
        },
        {
          id: '2',
          image: 'assets/img2.jpg',
          avatar: 'assets/avatar2.jpg',
          name: 'Bob',
          text: 'Integer ex risus, pharetra eu nulla eget, semper pharetra mi.',
          liked: false
        }
      ]
    };
  }

  // Adds a post to the state with a random GIF of the given subject
  addPost = subject => {
    const rootEndpoint = `https://api.tenor.com/v1/random?key=${TENOR_API_KEY}`;
    const endpoint = rootEndpoint + `&contentfilter=high&media_filter=basic&limit=1&q=${subject}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const result = data.results[0];
        const images = result.media[0];
        const avatar = images.nanogif.url;
        const image = images.gif.url;
        const name = result.title || subject;

        fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1')
          .then(response => response.json())
          .then(bacon => {
            const text = bacon[0];

            const newPost = {
              id: generateRandomID(),
              image: image,
              avatar: avatar,
              name: name,
              text: text
            };

            const oldPosts = this.state.posts;
            const newPosts = [newPost, ...oldPosts];
            this.setState({
              posts: newPosts
            });
          });
      });
  }

  // Returns the top n most popular posts (grouped by name)
  top = n => {
    const posts = Object.values(this.state.posts.reduce((acc, post) => {
      if (acc[post.name]) {
        return {
          ...acc,
          [post.name]: {
            id: acc[post.name].id,
            name: post.name,
            avatar: post.avatar,
            count: acc[post.name].count + 1
          }
        };
      } else {
        return {
          ...acc,
          [post.name]: {
            id: generateRandomID(),
            name: post.name,
            avatar: post.avatar,
            count: 1
          }
        };
      }
    }, {}));
    posts.sort((a, b) => b.count - a.count);
    return posts.slice(0, n);
  }

  render() {
    return (
    <div className="container">
      <Header />
      <NewPost addPost={this.addPost} />
      <div className="row">
        <Posts posts={this.state.posts} />
        <Suggestions />
      </div>
    </div>
    );
  }
}

export default App;
