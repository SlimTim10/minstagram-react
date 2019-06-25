import React from 'react';

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header;
