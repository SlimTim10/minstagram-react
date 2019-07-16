import React from 'react';

class Suggestions extends React.Component {
  render() {
    return (
      <aside id="suggestions" className="col-sm-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Suggestions</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li key="1" className="list-group-item">
              <img alt="avatar1" src="assets/avatar1.jpg" className="avatar mr-2" />Alice
            </li>
            <li key="2" className="list-group-item">
              <img alt="avatar2" src="assets/avatar2.jpg" className="avatar mr-2" />Bob
            </li>
          </ul>
        </div>
        <small>&copy; 2019 MINSTAGRAM</small>
      </aside>
    );
  }
}

export default Suggestions;
