import React from 'react';

class Posts extends React.Component {
  render() {
    return (
      <main id="post-container" className="col-lg-9">

        <div className="post card mx-auto mb-2">
          <img className="card-img-top" alt="img1" src="assets/img1.jpg" />
          <div className="card-body">
            <img alt="avatar1" src="assets/avatar1.jpg" className="avatar float-left mr-2" />
            <h5 className="card-title my-auto">Alice</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin, nisl nec egestas sollicitudin, est tortor egestas quam, nec venenatis ex libero cursus quam. Donec non nulla a mauris euismod consectetur eget quis lorem. Suspendisse quis orci non magna elementum rhoncus in a nisl. Etiam ipsum arcu, iaculis vel massa ac, vulputate ultricies diam. Aliquam aliquet augue neque, eget euismod ante efficitur sit amet. Cras mi ligula, molestie quis imperdiet at, sagittis quis tellus. Sed pretium enim orci, at feugiat diam blandit posuere. Etiam sit amet hendrerit ligula. Suspendisse ut faucibus felis.</p>
            <button className="hide btn btn-secondary btn-sm position-absolute">Hide</button>
            <i className="like float-right far fa-heart"></i>
          </div>
        </div>

        <div className="post card mx-auto mb-2">
          <img className="card-img-top" alt="img2" src="assets/img2.jpg" />
          <div className="card-body">
            <img alt="avatar1" src="assets/avatar2.jpg" className="avatar float-left mr-2" />
            <h5 className="card-title my-auto">Bob</h5>
            <p className="card-text">Integer ex risus, pharetra eu nulla eget, semper pharetra mi.</p>
            <button className="hide btn btn-secondary btn-sm position-absolute">Hide</button>
            <i className="like float-right far fa-heart"></i>
          </div>
        </div>
        
      </main>
    );
  }
}

export default Posts;
