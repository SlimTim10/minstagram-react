import React from 'react';

class Suggestions extends React.Component {
  render() {
    const items = this.props.suggestions.map(suggestion => (
      <li key={suggestion.id} className="list-group-item">
        <img
          alt="avatar"
          src={suggestion.avatar}
          className="avatar mr-2" />
        {suggestion.name}
      </li>
    ));
    
    return (
      <aside id="suggestions" className="col-sm-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Suggestions</h5>
          </div>
          <ul className="list-group list-group-flush">
            {items}
          </ul>
        </div>
        <small>&copy; 2019 MINSTAGRAM</small>
      </aside>
    );
  }
}

export default Suggestions;
