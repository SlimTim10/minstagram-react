import React from 'react';

class NewPost extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const subject = event.target.elements.newPost.value;
    this.props.addPost(subject);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form onSubmit={this.handleSubmit} id="new-post" className="form-inline justify-content-center mt-2">
            <input name="newPost" type="text" className="form-control mb-2 mr-sm-2" placeholder="Subject" />
            <button className="btn btn-primary mb-2" type="submit">Post it!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
