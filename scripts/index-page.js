const BandSite = new BandSiteApi(apiKey);
const comments = await BandSite.getComments();

//console.log(dateNew);

const commentListEle = document.querySelector(".comments__list");
console.log(commentListEle);

function displayComments() {
  commentListEle.innerHTML = "";
  console.log(comments);
  comments.forEach((comment) => {
    displayComment(comment);
  });
}

function displayComment(comment) {
  const commentEle = document.createElement("article");
  commentEle.classList.add("comments__list1");

  const commentAvatarEle = document.createElement("div");
  commentAvatarEle.classList.add("comments__avatar1");
  commentEle.appendChild(commentAvatarEle);

  const commentSec = document.createElement("section");
  commentSec.classList.add("comments__right");
  commentEle.appendChild(commentSec);

  const commentSec1 = document.createElement("section");
  commentSec1.classList.add("comments--box");
  commentSec.appendChild(commentSec1);

  const commentSec2 = document.createElement("section");
  commentSec2.classList.add("comments--box__title");
  commentSec1.appendChild(commentSec2);

  const commentP = document.createElement("p");
  commentP.classList.add("comments--box__p");
  commentP.textContent = comment.comment;
  commentSec1.appendChild(commentP);

  const commentName = document.createElement("h2");
  commentName.classList.add("comments--box__name");
  commentName.textContent = comment.name;
  commentSec2.appendChild(commentName);

  const commentDate = document.createElement("h2");
  commentDate.classList.add("comments--box__date");

  commentDate.textContent = convertTime(comment.timestamp);
  commentSec2.appendChild(commentDate);

  commentListEle.appendChild(commentEle);
  const commentD = document.createElement("hr");
  commentP.classList.add("solid");
  commentListEle.appendChild(commentD);
}

const commentForm = document.querySelector(".comment__form");

commentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const timestamp = `${
    new Date().getMonth() + 1
  }/${new Date().getDate()}/${new Date().getFullYear()}`;
  const comment = form.comment.value;

  //console.log(name, comment);
  const newComment = {
    name: name,
    timestamp: timestamp,
    comment: comment,
  };

  comments.push(newComment);
  console.log(comments);
  BandSite.postComment(comments);

  form.reset();

  displayComments();
});

function convertTime(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

displayComments();
