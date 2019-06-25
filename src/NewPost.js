import React from 'react';

class NewPost extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form id="new-post" className="form-inline justify-content-center mt-2">
            <input name="new-post" type="text" className="form-control mb-2 mr-sm-2" placeholder="Subject" />
            <button className="btn btn-primary mb-2" type="submit">Post it!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
