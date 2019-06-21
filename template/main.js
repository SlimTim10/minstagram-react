/*
data: object
{
  name: Profile name (string),
  text: Post content (string),
  imageURL: Post image URL (string),
  avatarURL: Profile avatar image URL (string)
}
*/
const createPost = data => {
  const html =
  `<div class="post card mx-auto mb-2">
            <img class="card-img-top" alt="post" src="${data.imageURL}">
            <div class="card-body">
              <img alt="avatar" src="${data.avatarURL}" class="avatar float-left mr-2">
              <h5 class="card-title my-auto">${data.name}</h5>
              <p class="card-text">${data.text}</p>
              <button class="hide btn btn-secondary btn-sm position-absolute">Hide</button>
              <i class="like float-right far fa-heart"></i>
            </div>
          </div>`;
  
  return $(html);
};

const prependPost = $post => {
  $post
    .hide()
    .prependTo('#post-container')
    .slideDown();
};

const attachHideHandler = () => {
  $('#post-container').on('click', '.hide', event => {
    const post = $(event.target).closest('.post');
    post.slideUp();
  });
};

const attachLikeHandler = () => {
  $('#post-container').on('click', '.like', event => {
    $(event.target).toggleClass('favourited far fas');
  });
};

$(() => {
  attachHideHandler();

  attachLikeHandler();
});
