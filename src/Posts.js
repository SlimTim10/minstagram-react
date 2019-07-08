import React from 'react';

class Posts extends React.Component {
  render() {

    const posts = this.props.posts.map(post => (
      <div className="post card mx-auto mb-2">
        <img className="card-img-top" alt="img1" src={post.image} />
        <div className="card-body">
          <img alt="avatar1" src={post.avatar} className="avatar float-left mr-2" />
          <h5 className="card-title my-auto">{post.name}</h5>
          <p className="card-text">{post.text}</p>
          <button className="hide btn btn-secondary btn-sm position-absolute">Hide</button>
          <i className="like float-right far fa-heart"></i>
        </div>
      </div>
    ));
    
    return (
      <main id="post-container" className="col-lg-9">
        {posts}
      </main>
    );
  }
}

export default Posts;
