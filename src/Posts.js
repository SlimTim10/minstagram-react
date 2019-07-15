import React from 'react';

class Posts extends React.Component {
  render() {

    const posts = this.props.posts.map(post => {
      let heart = (
        <i
          onClick={() => this.props.likePost(post.id)}
          className="like float-right far fa-heart" />
      );
      
      if (post.liked) {
        heart = (
          <i
            onClick={() => this.props.likePost(post.id)}
            className="like float-right fas fa-heart favourited" />
        );
      }
      
      return (
        <div key={post.id} className="post card mx-auto mb-2">
          <img className="card-img-top" alt="img1" src={post.image} />
          <div className="card-body">
            <img alt="avatar1" src={post.avatar} className="avatar float-left mr-2" />
            <h5 className="card-title my-auto">{post.name}</h5>
            <p className="card-text">{post.text}</p>
            <button onClick={() => this.props.hidePost(post.id)} className="hide btn btn-secondary btn-sm position-absolute">Hide</button>
            {heart}
          </div>
        </div>
      );
    });
    
    return (
      <main id="post-container" className="col-lg-9">
        {posts}
      </main>
    );
  }
}

export default Posts;
