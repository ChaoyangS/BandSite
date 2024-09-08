const comments = [
  {
    name: "Isaac Tadesse",
    time: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Christina Cabrera",
    time: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Victor Pinto",
    time: "10/20/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

const commentListEle = document.querySelector(".comments__list");
console.log(commentListEle);

function displayComments() {
  commentListEle.innerHTML = "";
  comments.toReversed().forEach((comment) => {
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
  commentDate.textContent = comment.time;
  commentSec2.appendChild(commentDate);

  commentListEle.appendChild(commentEle);
  const commentD = document.createElement("hr");
  commentP.classList.add("solid");
  commentListEle.appendChild(commentD);
}

const commentForm = document.querySelector(".comment__form");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const time = `${
    new Date().getMonth() + 1
  }/${new Date().getDate()}/${new Date().getFullYear()}`;
  const comment = form.comment.value;

  console.log(name, comment);
  const newComment = {
    name: name,
    time: time,
    comment: comment,
  };

  comments.push(newComment);
  console.log(comments);
  form.reset();

  displayComments();
});

displayComments();
