function sidebarHTML(i, bubblePerson, bubbleImg) {
  return `
<div onclick="bubbleClick(${i})" id="people${i}" class="peopleBubbleCountainer scale-up-center">
    <span>${bubblePerson}</span>
     <img class="peopleBubbleImg" src="${bubbleImg}">
</div>
`;
}


function logInUserHTML(u, User) {
  return `
<div class="userImgNameCountainer">
    <div class="logInUserCountainer slide-in-bottom scale-up-center">
        <div>
            <img src="${User["mainUserImg"]}" onclick="reaktionClickRight(${u})" id="clickReaktion${u}" class="logInUserIconSize">
        </div>
        <div class="suggestionsName" >${User["mainUserName"]}
            <br>
            <span class="suggestionsInfo">${User["alias"]}</span>
        </div>
    </div>
</div>
`;
}


function rightSectionHTML(i, section) {
  return `                   
<div class="proposalsOtherUsers">
    <div class="choiceOtherUsers">
        <div class="suggestionsUsers scale-up-center">
            <div>
                <img src="${section["suggestionsImg"]}" onclick="reaktionClickRight(${i})" id="clickReaktion${i}" class="suggestionsIconSize">
            </div>
            <div class="suggestionsName"> ${section["suggestionsName"]} 
                <br>
                <div class="suggestionsInfo">${section["suggestionsInfo"]}
                </div> 
            </div>
        </div>
        <div>
            <div class="followText" id="follow${i}" onclick="follow(${i})">Folgen
            </div>
            <div class="notFollowText d-none" id="notFollow${i}" onclick="notFollow(${i})">Gefolgt
            </div>
        </div>
    </div>
</div>
`;
}


function renderMyCommentHTML(i, j, post) {
  let commentator = myUser[0];
  let writerImg = `${commentator["mainUserImg"]}`;
  let writer = `${commentator["mainUserName"]}`;
  return `
<div id="commentCountainer${j}, ${i}" class="commentOpenTextPosi">
    <div class="posiCenter">
        <img class="imgOtherUserSize" src="${writerImg}"> 
        <span class="suggestionsName">${writer}: ${post["comment"][j]}</span>
    </div>
    <div class="deleteCountainer">
        <button class="bttnPost">
            <img onclick="deleteCommit(${j}, ${i})" class="iconSizeSmall" src="icons/close.png">
        </button>
    </div>
</div>
`;
}


function renderMyCommentOpenHTML(i, j, post) {
  let commentator = myUser[0];
  let writerImg = `${commentator["mainUserImg"]}`;
  let writer = `${commentator["mainUserName"]}`;
  return `
<div id="commentCountainerOpen${j}, ${i}" class="commentOpenTextPosi">
    <div class="posiCenter" >
        <img class="imgOtherUserOpenSize" src="${writerImg}"> 
        <span class="suggestionsName">${writer}: ${post["comment"][j]}</span>
    </div>
    <div class="deleteCountainer">
        <img onclick="deleteCommit(${j}, ${i})" class="iconSizeSmall" src="icons/close.png">
    </div>
</div>
`;
}


function renderImgHTML(i){
    return `
<img src="${posts[i]["post"]}" alt="" class="d-block w-100">
`;
}


function imgCarouselHTML(i) {
    return`
<div id="carouselExampleIndicators${i}" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div id="carousel_inner${i}" class="carousel-inner">
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
`;
}


function postImgHTML(i, j) {
    return `
<div id="post_image_${i}_${j}" class="carousel-item">
    <img src=${posts[i].post[j]} class="d-block w-100" alt="...">
</div>
`;
}


function postImgReHTML(i){
    return `
<img src="${posts[i]["post"]}" alt="" class="userPostImgSizeOpen">
`;
}


function imgCarouselReHTML(i) {
    return`
<div id="carouselExampleIndicators${i}${i}" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators${i}${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators${i}${i}" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators${i}${i}" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div id="carousel_inner_RE${i}" class="carousel-inner">         
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${i}${i}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${i}${i}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
`;
}


function postImgsReHTML(i, j) {
    return `
<div id="post_image_RE${i}_${j}" class="carousel-item">
    <img src=${posts[i].post[j]} class="userPostImgSizeOpen" alt="...">
</div>
`;
}


function trueIconHeartHTML(i){
    return`
    <button id="heartBttnRed${i}" class="bttnPost">
      <img onclick="dontLovePostBttn(${i})" class="iconSizePost" src="icons/heart-red.png">
    </button>`;
}


function falseIconHeartHTML(i){
    return`
    <button id="heartBttn${i}" class="bttnPost">
      <img onclick="lovePostBttn(${i})" class="iconSizePost" src="icons/love.png">
    </button>`;
}


function trueIconBookmarkHTML(i){
    return`
    <button id="epubOff${i}" class="bttnPost">
    <img onclick="bookmarkOffBttn(${i})" class="iconSizePost" src="icons/lesezeichen-black.png">
  </button>`;
}


function falseIconBookmarkHTML(i){
    return`
    <button id="epub${i}" class="bttnPost">
      <img onclick="bookmarkBttn(${i})" class="iconSizePost" src="icons/lesezeichen.png">
    </button>`;
}


function trueIconShareHTML(i){
    return`
    <button id="sendBttnOff${i}" class="bttnPost">
      <img onclick="shareBoxCloseBttn(${i})" class="iconSizePost" src="icons/send-black.png">
    </button>`;
}


function falseIconShareHTML(i){
    return`
    <button id="sendBttn${i}" class="bttnPost">
      <img onclick="shareBoxOpenBttn(${i})" class="iconSizePost" src="icons/send.png">
    </button>`;
}


function trueIconLoveCommentHTML(i){
    return`
    <button class="bttnPost" id="commentHeartRedBttn${i}">
      <img onclick="dontLoveCommentBttn(${i})" class="iconSizeSmall" src="icons/heart-red.png">
    </button>`;
}


function falseIconLoveCommentHTML(i){
    return`
    <button class="bttnPost" id="commentHeartBttn${i}">
      <img onclick="loveCommentBttn(${i})" class="iconSizeSmall" src="icons/love.png">
    </button>`;
}