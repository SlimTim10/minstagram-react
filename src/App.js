import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <nav id="top-nav" className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">Minstagram</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0 mx-auto">
                <input className="form-control mr-sm-2" name="Search" type="search" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a id="theme-switcher" className="nav-link" href="#"><i className="far fa-compass"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="far fa-heart"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="far fa-user"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <div className="row">
        <div className="col-12">
          <form id="new-post" className="form-inline justify-content-center mt-2">
            <input name="new-post" type="text" className="form-control mb-2 mr-sm-2" placeholder="Subject" />
            <button className="btn btn-primary mb-2" type="submit">Post it!</button>
          </form>
        </div>
      </div>
      <div className="row">
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
        
        <aside id="suggestions" className="col-sm-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Suggestions</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <img alt="avatar1" src="assets/avatar1.jpg" className="avatar mr-2" />Alice
              </li>
              <li className="list-group-item">
                <img alt="avatar2" src="assets/avatar2.jpg" className="avatar mr-2" />Bob
              </li>
            </ul>
          </div>
          <small>&copy; 2019 MINSTAGRAM</small>
        </aside>
        
      </div>
    </div>
    );
  }
}

export default App;
