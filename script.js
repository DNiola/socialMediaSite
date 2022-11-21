let myUser = [
  {
    mainUserName: "Davide N",
    alias: "Tira mi su",
    mainUserImg: "img/myImg.jpg",
  },
];

let posts = [
  {
    usersImg: "img/user-profile1.jpg",
    name: "Max Anders",
    subInfo: "Berlin",
    post: ["img/user-post0.jpg"],
    likes: 999,
    commits: "Max ist das deine Hand auf dem Foto?😜",
    commitsUser: ["Kevin22"],
    commitsUserImg: "img/user-profile2.jpg",
    comment: [],
  },
  {
    usersImg: "img/user-profile3.jpg",
    name: "Christin Rot",
    subInfo: "Hamburg",
    post: ["img/user-post1.jpg", "img/user-post5.jpg", "img/user-post6.jpg"],
    likes: 888,
    commits: ["Weiter So !"],
    commitsUser: ["Wurm762"],
    commitsUserImg: "img/user-profile4.jpg",
    comment: [],
  },
  {
    usersImg: "img/user-profile5.jpg",
    name: "Inna Kolle",
    subInfo: "Nürnberg",
    post: ["img/user-post2.jpg"],
    likes: 777,
    commits: "Grüße Zurück !!! 😝",
    commitsUser: ["SonneLLO"],
    commitsUserImg: "img/user-profile6.jpg",
    comment: [],
  },
  {
    usersImg: "img/user-profile7.jpg",
    name: "Jung klein",
    subInfo: "",
    post: ["img/user-post3.jpg", "img/user-post7.jpg", "img/user-post8.jpg"],
    likes: 7217,
    commits: "Sehr Cool",
    commitsUser: ["Annabell22"],
    commitsUserImg: "img/user-profile8.jpg",
    comment: [],
  },
  {
    usersImg: "img/user-profile9.jpg",
    name: "Janik Speer",
    subInfo: "Canada",
    post: ["img/user-post4.jpg"],
    likes: 17,
    commits: "Nächstes mal bin ich dabei",
    commitsUser: ["S0nja"],
    commitsUserImg: "img/user-profile10.jpg",
    comment: [],
  },
];


/*Render Functions*/
function render() {
  load();
  renderBubble();
  renderLogInUser();
  renderPosts();
  renderImgs();
  save();
}


function renderIcons(i) {
  renderLove(i);
  renderBookmark(i);
  renderShare(i);
  renderLoveComment(i);
}


function renderLove(i) {
  let heart = document.getElementById(`heartPlace${i}`);
  let heartOpen = document.getElementById(`heartOpenPlace${i}`);
  let proof = posts[i].liked;
  if (proof == true) {
    heart.innerHTML = trueIconHeartHTML(i);
    heartOpen.innerHTML =  trueIconHeartHTML(i);
  } else {
    heart.innerHTML = falseIconHeartHTML(i);
    heartOpen.innerHTML = falseIconHeartHTML(i);
  }
}


function renderBookmark(i) {
  let bookmark = document.getElementById(`bookmarkPlace${i}`);
  let bookmarkOpen = document.getElementById(`bookmarkOpenPlace${i}`);
  let proof = posts[i].bookmark;
  if (proof == true) {
    bookmark.innerHTML = trueIconBookmarkHTML(i);
    bookmarkOpen.innerHTML = trueIconBookmarkHTML(i);
  } else {
    bookmark.innerHTML = falseIconBookmarkHTML(i);
    bookmarkOpen.innerHTML = falseIconBookmarkHTML(i);
  }
}


function renderShare(i) {
  let share = document.getElementById(`sharePlace${i}`);
  let shareOpen = document.getElementById(`shareOpenPlace${i}`);
  let proof = posts[i].share;
  if (proof == true) {
    share.innerHTML = trueIconShareHTML(i);
    shareOpen.innerHTML = trueIconShareHTML(i);
  } else {
    share.innerHTML = falseIconShareHTML(i);
    shareOpen.innerHTML = falseIconShareHTML(i);
  }
}


function renderLoveComment(i) {
  let love = document.getElementById(`loveCommentPlace${i}`);
  let loveOpen = document.getElementById(`loveCommentOpenPlace${i}`);
  let proof = posts[i].loveComment;
  if (proof == true) {
    love.innerHTML = trueIconLoveCommentHTML(i);
    loveOpen.innerHTML = trueIconLoveCommentHTML(i);
  } else {
    love.innerHTML = falseIconLoveCommentHTML(i);
    loveOpen.innerHTML = falseIconLoveCommentHTML(i);
  }
}


/*First Post*/
//add and push a message in the first comment//
function addFirstCommit(i) {
  let post = posts[i];
  let commits = document.getElementById(`inputCommit${i}`);
  let commitsOpen = document.getElementById(`inputCommitOpen${i}`);
  if (commits.value == "") {
    console.log("need commit");
  } else {
    post["comment"].push(commits.value);
    renderComments(i);
    commits.value = "";
    commitsOpen.value = "";
  }
  save();
}


function sendText(i) {
  addFirstCommit(i);
}


//add and push a message in the comment in open Size//
function addFirstCommitOpen(i) {
  let post = posts[i];
  let commits = document.getElementById(`inputCommit${i}`);
  let commitsOpen = document.getElementById(`inputCommitOpen${i}`);
  if (commitsOpen.value == "") {
    console.log("need commit");
  } else {
    post["comment"].push(commitsOpen.value);
    renderComments(i);
    commitsOpen.value = "";
    commits.value = "";
  }
  save();
}


//render single and multiple img in a singel post//
function renderImgs() {
  for (let i = 0; i < posts.length; i++) {
    renderPostImages(i);
    renderPostImagesRE(i);
  }
}


//Render all Post//
function renderPosts() {
  let userPost = document.getElementById("post");
  userPost.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    const thePost = posts[i];
    userPost.innerHTML += postHTML(i, thePost);
    renderComments(i);
    renderIcons(i);
  }
}


//Render the all Comments//
function renderComments(i) {
  let outputComit = document.getElementById(`commitsArea${i}`);
  let area = outputComit;
  area.innerHTML = "";
  let outputComitOpen = document.getElementById(`commitsAreaOpen${i}`);
  let areaOpen = outputComitOpen;
  areaOpen.innerHTML = "";
  let post = posts[i];
  for (let j = 0; j < posts[i]["comment"].length; j++) {
    area.innerHTML += renderMyCommentHTML(i, j, post);
    areaOpen.innerHTML += renderMyCommentOpenHTML(i, j, post);
  }
  save();
}


//proof of one picture or several are posted//
function renderPostImages(i) {
  let postImgLength = posts[i].post.length;
  if (postImgLength == 1) {
    renderOnePostImage(i);
  } else {
    renderMorePostImages(i);
  }
}


//render one Img in one post//
function renderOnePostImage(i) {
  let postImg = document.getElementById(`img${i}`);
  postImg.innerHTML += renderImgHTML(i);
}


//render more of one Img in one post//
function renderMorePostImages(i) {
  let postImgLength = posts[i].post.length;
  let postImg = document.getElementById(`img${i}`);
  postImg.innerHTML += imgCarouselHTML(i);
  for (let j = 0; j < postImgLength; j++) {
    document.getElementById(`carousel_inner${i}`).innerHTML +=
      postImgHTML(i, j);
  }
  document.getElementById(`post_image_${i}_0`).classList.add("active");
}


//same function alse renderPostImages for responsive//
function renderPostImagesRE(i) {
  let postImgLength = posts[i].post.length;
  if (postImgLength == 1) {
    renderOnePostImageRE(i);
  } else {
    renderMorePostImagesRE(i);
  }
}


//same function alse renderOnePostImage for responsive//
function renderOnePostImageRE(i) {
  let postImgRE = document.getElementById(`imgRE${i}`);
  postImgRE.innerHTML += postImgReHTML(i);
}


//same function alse renderMorePostImages for responsive//
function renderMorePostImagesRE(i) {
  let postImgLength = posts[i].post.length;
  let postImgRE = document.getElementById(`imgRE${i}`);
  postImgRE.innerHTML += imgCarouselReHTML(i);
  for (let j = 0; j < postImgLength; j++) {
    document.getElementById(`carousel_inner_RE${i}`).innerHTML +=
    postImgsReHTML(i, j);
  }
  document.getElementById(`post_image_RE${i}_0`).classList.add("active");
}


//save HTML//
function save() {
  let commentAsText = JSON.stringify(posts);
  localStorage.setItem("comment", commentAsText);
}


//load HTML//
function load() {
  let commentAsText = localStorage.getItem("comment");
  if (commentAsText) {
    posts = JSON.parse(commentAsText);
  }
}


//who we scroll, this function will executed//
window.onscroll = function () {
  showMoveBttnToTop();
};


//from a certain scrolling depth the button appears//
function showMoveBttnToTop() {
  let ToTopBttn = document.getElementById("moveBttn");
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    ToTopBttn.classList.remove("d-none");
  } else {
    ToTopBttn.classList.add("d-none");
  }
}


//Search function//
function getSearch() {
  let search = document.getElementById("search").value;
  search = search.toLowerCase();
  filterPosts(search);
}


function filterPosts(searchIt) {
  let postsContainer = document.getElementById("post");
  postsContainer.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    let postAuthor = posts[i].name;
    let postLocation = posts[i].subInfo;
    let postText = `${posts[i].commits} ${posts[i].commitsUser}`;
    let thePost = posts[i];
    if (
      postAuthor.toLocaleLowerCase().includes(searchIt) ||
      postText.toLocaleLowerCase().includes(searchIt) ||
      postLocation.toLocaleLowerCase().includes(searchIt)
    ) {
      postsContainer.innerHTML += postHTML(i, thePost);
      renderComments(i);
      renderPostImages(i);
    }
  }
}


//include function for template //
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}