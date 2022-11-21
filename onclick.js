let emoji = ["😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥"];

/*Close evere Open Box with onclick on background*/
function closeBackground(i) {
  menuClose(i);
  commentBoxClose(i);
  closeShare(i);
}


/*open the menu*/
function menuOpenPost(i) {
  let menuIcon = document.getElementById(`menuBttn${i}`);
  menuIcon.classList.remove("d-none");
  let menuIconV = document.getElementById(`menuBttnClose${i}`);
  menuIconV.classList.add("d-none");
  let menuCountainerOpen = document.getElementById(`menuCountainer${i}`);
  menuCountainerOpen.classList.add("d-none");
  let menuIconVOpen = document.getElementById(`menuOpenBttnClose${i}`);
  menuIconVOpen.classList.add("d-none");
  let menuIconOpen = document.getElementById(`menuOpenBttn${i}`);
  menuIconOpen.classList.remove("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.remove("zindex");
  commentBoxOpenBttn(i);
}


/*Open Img and Commit Box*/
function commentBoxClose(i) {
  let postOpen = document.getElementById(`postOpen${i}`);
  postOpen.classList.remove("zindex");
  commentBoxCloseBttn(i);
}


/*Open menu box*/
function menuOpenBttn(i) {
  let menuIcon = document.getElementById(`menuBttn${i}`);
  menuIcon.classList.add("d-none");
  let menuIconV = document.getElementById(`menuBttnClose${i}`);
  menuIconV.classList.remove("d-none");
  let menuCountainerOpen = document.getElementById(`menuCountainer${i}`);
  menuCountainerOpen.classList.remove("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.remove("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.add("scrollBlock");
  let menuIconOpen = document.getElementById(`menuOpenBttn${i}`);
  menuIconOpen.classList.add("d-none");
  let menuIconVOpen = document.getElementById(`menuOpenBttnClose${i}`);
  menuIconVOpen.classList.remove("d-none");
}


/*close the menu box*/
function menuCloseBttn(i) {
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.add("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.remove("scrollBlock");
}


/*if click on background this function will start*/
function menuClose(i) {
  let menuIcon = document.getElementById(`menuBttn${i}`);
  menuIcon.classList.remove("d-none");
  let menuIconV = document.getElementById(`menuBttnClose${i}`);
  menuIconV.classList.add("d-none");
  let menuCountainerOpen = document.getElementById(`menuCountainer${i}`);
  menuCountainerOpen.classList.add("d-none");
  let menuIconVOpen = document.getElementById(`menuOpenBttnClose${i}`);
  menuIconVOpen.classList.add("d-none");
  let menuIconOpen = document.getElementById(`menuOpenBttn${i}`);
  menuIconOpen.classList.remove("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.add("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.remove("scrollBlock");
}


/*dont follow button*/
function deleteFollowBttn(i) {
  menuCloseBttn(i);
  deleteFollow(i);
  render();
}


/*when click on "deleteFollowBttn(i)" this function will start*/
function deleteFollow(i) {
  if (posts[0] > 1) {
    posts[0]--;
    render();
    let;
  } else {
    posts.splice([i], 1);
    renderPosts();
  }
}


/*Open send box*/
function shareBoxOpenBttn(i) {
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.remove("d-none");
  let postOpen = document.getElementById(`postOpen${i}`);
  postOpen.classList.add("zindex");
  let scroll = document.getElementById("body");
  scroll.classList.add("scrollBlock");
  openShareBox(i);
}


/*when click on "shareBoxOpenBttn(i)" this function will start*/
function openShareBox(i) {
  let shareBoxOpen = document.getElementById(`shareBox${i}`);
  shareBoxOpen.classList.remove("d-none");
}


function share(i) {
  posts[i].share = true;
  let shareBoxOpen = document.getElementById(`shareBox${i}`);
  shareBoxOpen.classList.add("d-none");
  let shareBoxxOpen = document.getElementById(`shareBoxx${i}`);
  shareBoxxOpen.classList.remove("d-none");
  let sendIcon = document.getElementById(`sendBttn${i}`);
  sendIcon.classList.add("d-none");
  renderShare(i)
  save()
}


function OkeyBttn(i) {
  let shareBoxxOpen = document.getElementById(`shareBoxx${i}`);
  shareBoxxOpen.classList.add("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.add("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.remove("scrollBlock");
  commentBoxClose(i);
}


/*when click on "OkeyBttn(i)" this function will start*/
function closeShare(i) {
  let shareBoxOpen = document.getElementById(`shareBox${i}`);
  shareBoxOpen.classList.add("d-none");
  let shareBoxxOpen = document.getElementById(`shareBoxx${i}`);
  shareBoxxOpen.classList.add("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.add("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.remove("scrollBlock");
}


function dontShare(i) {
  posts[i].share = false;
  let shareBoxOpen = document.getElementById(`shareBox${i}`);
  shareBoxOpen.classList.add("d-none");
  let sendIconBlack = document.getElementById(`sendBttnOff${i}`);
  sendIconBlack.classList.add("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.add("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.remove("scrollBlock");
  commentBoxClose(i);
  renderShare(i)
  save()
}


function shareBoxCloseBttn(i) {
  let shareBoxxOpen = document.getElementById(`shareBoxx${i}`);
  shareBoxxOpen.classList.add("d-none");
  dontShare(i);
}


/*Open large commit box*/
function commentBoxOpenBttn(i) {
  let commitIcon = document.getElementById(`commentBttn${i}`);
  commitIcon.classList.add("d-none");
  let commitIconBlack = document.getElementById(`commentBttnOff${i}`);
  commitIconBlack.classList.remove("d-none");
  let postOpen = document.getElementById(`postOpen${i}`);
  postOpen.classList.remove("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.remove("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.add("scrollBlock");
  let commitIconOpen = document.getElementById(`commentBttnOpen${i}`);
  commitIconOpen.classList.add("d-none");
  let commitIconBlackOpen = document.getElementById(`commentBttnOffOpen${i}`);
  commitIconBlackOpen.classList.remove("d-none");
  let menuBox = document.getElementById(`menuIconCountainer${i}`);
  menuBox.classList.add("d-none");
}


function commentBoxCloseBttn(i) {
  let commitIcon = document.getElementById(`commentBttn${i}`);
  commitIcon.classList.remove("d-none");
  let commitIconBlack = document.getElementById(`commentBttnOff${i}`);
  commitIconBlack.classList.add("d-none");
  let postOpen = document.getElementById(`postOpen${i}`);
  postOpen.classList.add("d-none");
  let background = document.getElementById(`menuBackground${i}`);
  background.classList.add("d-none");
  let scroll = document.getElementById("body");
  scroll.classList.remove("scrollBlock");
}


/*First Post change Icons*/
//change Icons after click//
function bookmarkBttn(i) {
  posts[i].bookmark = true;
  let bookmarkOn = document.getElementById(`epub${i}`);
  bookmarkOn.classList.add("d-none");
  renderBookmark(i);
  save();
}


//change Icons after click//
function bookmarkOffBttn(i) {
  posts[i].bookmark = false;
  let bookmarkOff = document.getElementById(`epubOff${i}`);
  bookmarkOff.classList.add("d-none");
  renderBookmark(i);
  save();
}


//change Icons after click//
function lovePostBttn(i) {
  posts[i].likes++;
  posts[i].liked = true;
  document.getElementById(`likesSum${i}`).innerHTML = posts[i]["likes"];
  document.getElementById(`likesSumOpen${i}`).innerHTML = posts[i]["likes"];
  renderLove(i);
  save();
}


//change Icons after click//
function dontLovePostBttn(i) {
  posts[i].likes--;
  posts[i].liked = false;
  document.getElementById(`likesSum${i}`).innerHTML = posts[i]["likes"];
  document.getElementById(`likesSumOpen${i}`).innerHTML = posts[i]["likes"];
  renderLove(i);
  save();
}


function loveCommentBttn(i) {
  posts[i].loveComment = true;
  let heart = document.getElementById(`commentHeartBttn${i}`);
  heart.classList.add("d-none");
  renderLoveComment(i)
  save()
}


//change Icons after click//
function dontLoveCommentBttn(i) {
  posts[i].loveComment = false;
  let heartRed = document.getElementById(`commentHeartRedBttn${i}`);
  heartRed.classList.add("d-none");
  renderLoveComment(i)
  save()
}


/*Open Emoji Box in Commit box*/
//add and remove style after click//
function openEmoji(i) {
  let buttonForOpen = document.getElementById(`emojiCountainer${i}`);
  buttonForOpen.classList.remove("d-none");
  buttonForOpen.classList.add("slide-in-bottom");
  let buttonStyle = document.getElementById(`emojiBttnCountainer${i}`);
  buttonStyle.classList.add("emojiBttn");
  buttonStyle.classList.remove("emojiBttnOpen");
  let closeEmojiRender = document.getElementById(`closeEmojiBttn${i}`);
  closeEmojiRender.classList.remove("d-none");
  let imgForOpen = document.getElementById(`openEmojiBttn${i}`);
  imgForOpen.classList.add("d-none");
  renderEmoji(i);
}


function openEmojiOpen(i) {
  let buttonForOpenInOpen = document.getElementById(`emojiCountainerOpen${i}`);
  buttonForOpenInOpen.classList.remove("d-none");
  buttonForOpenInOpen.classList.add("slide-in-bottom");
  let buttonStyleOpen = document.getElementById(`emojiBttnCountainerOpen${i}`);
  buttonStyleOpen.classList.add("emojiBttn");
  buttonStyleOpen.classList.remove("emojiBttnOpen");
  let closeEmojiRenderOpen = document.getElementById(`closeEmojiBttnOpen${i}`);
  closeEmojiRenderOpen.classList.remove("d-none");
  let imgForOpenInOpen = document.getElementById(`openEmojiBttnOpen${i}`);
  imgForOpenInOpen.classList.add("d-none");
  renderEmoji(i);
}


//Render the Emoji Box//
function renderEmoji(i) {
  let emojis = document.getElementById(`emojiCountainer${i}`);
  let emojisOpen = document.getElementById(`emojiCountainerOpen${i}`);
  emojis.innerHTML = "";
  emojisOpen.innerHTML = "";
  let number = i;
  for (let i = 0; i < emoji.length; i++) {
    emojis.innerHTML += `<a onclick="pushEmoji(${i}, ${number})" id="emoji${i}">&#12854${i};</a>`;
    emojisOpen.innerHTML += `<a onclick="pushEmoji(${i}, ${number})" id="emoji${i}">&#12854${i};</a>`;
  }
}


function outputEmoji(emojiPush, emojiPushOpen, number) {
  let textField = document.getElementById(`inputCommit${number}`);
  textField.value += `${emojiPush}`;
  let textFieldOpen = document.getElementById(`inputCommitOpen${number}`);
  textFieldOpen.value += `${emojiPushOpen}`;
}


//push Emoji in input field//
function pushEmoji(i, number) {
  let emojiPush = document.getElementById(`emoji${i}`).innerHTML;
  let emojiPushOpen = document.getElementById(`emoji${i}`).innerHTML;
  outputEmoji(emojiPush, emojiPushOpen, number);
}


//close Emoji Box(After click on Emojibutton add and remove styles)//
function closeEmoji(i) {
  let buttonForOpen = document.getElementById(`emojiCountainer${i}`);
  buttonForOpen.classList.add("d-none");
  let buttonStyle = document.getElementById(`emojiBttnCountainer${i}`);
  buttonStyle.classList.remove("emojiBttn");
  buttonStyle.classList.add("emojiBttnOpen");
  let imgForOpen = document.getElementById(`openEmojiBttn${i}`);
  imgForOpen.classList.remove("d-none");
  let imgForClose = document.getElementById(`closeEmojiBttn${i}`);
  imgForClose.classList.add("d-none");
}


function closeEmojiOpen(i) {
  let buttonForOpenInOpen = document.getElementById(`emojiCountainerOpen${i}`);
  buttonForOpenInOpen.classList.add("d-none");
  buttonForOpenInOpen.classList.remove("slide-in-bottom");
  let buttonStyleOpen = document.getElementById(`emojiBttnCountainerOpen${i}`);
  buttonStyleOpen.classList.remove("emojiBttn");
  buttonStyleOpen.classList.add("emojiBttnOpen");
  let closeEmojiRenderOpen = document.getElementById(`closeEmojiBttnOpen${i}`);
  closeEmojiRenderOpen.classList.add("d-none");
  let imgForOpenInOpen = document.getElementById(`openEmojiBttnOpen${i}`);
  imgForOpenInOpen.classList.remove("d-none");
}


function bubbleClick(i) {
  let bubbleReaktion = document.getElementById(`people${i}`);
  if (bubbleReaktion)
    alert(
      "Diese Seite ist für Übungszwecke gedacht//This page is for practice purposes"
    );
}


function reaktionClickLeft(i) {
  i = 0;
  let reakClick = document.getElementById(`clickReaktion${i}`);
  if (reakClick)
    alert(
      "Diese Seite ist für Übungszwecke gedacht//This page is for practice purposes"
    );
}


function reaktionClickRight(i) {
  let reakClick = document.getElementById(`clickReaktion${i}`);
  if (reakClick)
    alert(
      "Diese Seite ist für Übungszwecke gedacht//This page is for practice purposes"
    );
}


/*Slide functions*/
// sidebar button for move left-end//
function slideLeft() {
  const button = document.getElementById("slideL");
  button.onclick = () => {
    document.getElementById("sidebar").scrollLeft += -1000;
    if ((scrollLeft = 1000)) {
      slideLeftNone();
    }
  };
}


// sidebar right button come and left button become class d-none//
function slideLeftNone() {
  let rightArrow = document.getElementById("slideR");
  let leftArrow = document.getElementById("slideL");
  rightArrow.classList.remove("d-none");
  leftArrow.classList.add("d-none");
}


// sidebar button for move right-end//
function slideRight() {
  const button = document.getElementById("slideR");
  button.onclick = () => {
    document.getElementById("sidebar").scrollLeft += 1000;
    if ((scrollLeft = 1000)) {
      slideRightNone();
    }
  };
}


// sidebar left button come and right button become class d-none//
function slideRightNone() {
  let rightArrow = document.getElementById("slideR");
  let leftArrow = document.getElementById("slideL");
  rightArrow.classList.add("d-none");
  leftArrow.classList.remove("d-none");
}


/* delete Commit function*/
function deleteCommit(j, i) {
  posts[i]["comment"].splice(j, 1);
  renderComments(i);
  save();
}


function downMenuRe() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches(".myUsericonSizeFooter")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
