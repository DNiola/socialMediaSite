function postHTML(i, thePost) {
    return` 
  <div class="postMainCountainer scale-in-bottom ">
      <div class="userHeaderCountainer">
          <div class="userHeader">
              <div class="imgOtherUserCountainer">
                  <img onclick="reaktionClickLeft(${i})" id="clickReaktion${i}" class="imgOtherUserSize" src="${thePost["usersImg"]}">
              </div>
              <div> ${thePost["name"]} 
                  <br>
                  <span class="textSmall">${thePost["subInfo"]}</span>
              </div>
          </div>
          <div class="iconCountainer">
              <button id="menuBttn${i}" class="bttnPost">
                  <img onclick="menuOpenBttn(${i})" class="iconSizePost" src="icons/menu-point.png">
              </button>
              <button id="menuBttnClose${i}" class="bttnPost d-none">
                  <img onclick="menuCloseBttn(${i})" class="iconSizePost" src="icons/menu-V.png">
              </button>
          </div>
      </div>
      <div class="userImgPostCountainer">
          <div id="img${i}"></div>
              <div class="userPostOption">
                  <div class="flex">
                      <div id="heartPlace${i}"class="iconCountainer">
                      </div>
                      <div class="iconCountainer">
                          <div>
                              <button id="commentBttn${i}" class="bttnPost">
                                  <img onclick="commentBoxOpenBttn(${i})" class="iconSizePost" src="icons/comment.png">
                              </button>
                          </div>
                          <div>
                              <button id="commentBttnOff${i}" class="bttnPost  d-none">
                                  <img onclick="commentBoxCloseBttn(${i})" class="iconSizePost" src="icons/comment-black.png">
                              </button>
                          </div>
                      </div>
                      <div id="sharePlace${i}" class="iconCountainer">                  
                      </div>
                  </div>
                  <div class="flex">
                      <div id="bookmarkPlace${i}" class="iconCountainer">
                      </div>
                  </div>
              </div>
              <div class="commentUserCountainer">
                  <div class="showLike">
                      <span>Gefällt <span id="likesSum${i}">${thePost["likes"]}</span></span>
                  </div>
                  <div class="commentsScroll">
                      <div class="commentOtherUserTextPosi">
                          <div class="posiCenter">
                              <div>
                                  <img src="${thePost["commitsUserImg"]}" onclick="reaktionClickLeft(${i})" id="clickReaktion${i}" class="imgOtherUserSize">
                              </div>
                              <div>
                                  <span class="suggestionsName flex">${thePost["commitsUser"]}: ${thePost["commits"]}</span>
                              </div>
                          </div>
                          <div id="loveCommentPlace${i}">
                          </div>
                      </div>
                      <div>
                          <span id="commitsArea${i}"></span>
                      </div>
                  </div>
              </div>
              <div class="paddTopBottom10px">
                  <span class="timeStamp">Vor 10 Stunden</span>
              </div>
          </div>
          <div id="emojiCountainer${i}" class="d-none emojiCountainer">
          </div>
          <div class="inputCountainerOpen">
              <div id="emojiBttnCountainer${i}" class="emojiBttnOpen">
                  <button id="closeEmojiBttn${i}" class="bttnPost d-none">
                      <img id="emojiImg${i}" onclick="closeEmoji(${i})" class="iconSizePost" src="icons/emojiOpen.png">
                  </button>
                  <button id="openEmojiBttn${i}" class="bttnPost">
                      <img id="emojiImgClose${i}" onclick="openEmoji(${i})" class="iconSizePost" src="icons/emoji.png">
                  </button>
              </div>
              <div class="formCountainer">
                  <input onchange="sendText(${i})" class="inputCommit" id="inputCommit${i}" placeholder="Kommentar">
              </div>
              <div class="sendBttnCountainer">
                  <button class="sendBttn" onclick="addFirstCommit(${i})">Posten
                  </button>
              </div>
          </div>
      </div>
  </div>
  <div class="paddTopBottom10px"></div>
  
  <!--Open Post HTML-->
  
  <div class="openMainPosi">
      <div id="postOpen${i}" class="postMainCountainerOpen d-none">
          <div class="postOpenPosiLX">
              <div class="userHeaderOpen">
                  <div class="paddAll8px">
                      <img class="imgOtherUserSize" src="${thePost["usersImg"]}">
                  </div>
                  <div>${thePost["name"]}
                      <br>
                      <span class="textSmall">${thePost["subInfo"]}</span>
                  </div>
              </div>
              <div class="userImgPostCountainer">
              <div id="imgRE${i}"></div>
                  <div class="flex">
                  </div>
                  <div id="menuIconCountainer${i}" class="iconCountainer">
                      <button id="menuOpenBttn${i}" class="bttnPost">
                          <img onclick="menuOpenBttn(${i})" class="iconSizePost" src="icons/menu-point.png">
                      </button>
                      <button id="menuOpenBttnClose${i}" class="bttnPost d-none">
                          <img onclick="menuCloseBttn(${i})" class="iconSizePost" src="icons/menu-V.png">
                      </button>
                  </div>
                  <div class="userPostOption">
                      <div class="flex">
                          <div id="heartOpenPlace${i}" class="iconCountainer">
                          </div>
                          <div class="iconCountainer">
                              <button id="commentBttnOpen${i}" class="bttnPost">
                                  <img onclick="commentBoxOpenBttn(${i})" class="iconSizePost" src="icons/comment.png">
                              </button>
                              <button id="commentBttnOffOpen${i}" class="bttnPost  d-none">
                                  <img onclick="commentBoxCloseBttn(${i})" class="iconSizePost" src="icons/comment-black.png">
                              </button>
                          </div>
                          <div id="shareOpenPlace${i}" class="iconCountainer">
                          </div>
                      </div>
                      <div class="flex">
                          <div id="bookmarkOpenPlace${i}" class="iconCountainer">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="commentOpenPosi">
              <div class="commentClosePosi">
                  <img onclick="commentBoxClose(${i})" class="iconSizePost" src="icons/close.png">
              </div>
              <div class="commentTest">
                  <div class="commentUserPosiOpen">
                      <div class="commentOpenTextPosi">
                          <div>
                              <img onclick="reaktionClickLeft(${i})" id="clickReaktion${i}" class="imgOtherUserOpenSize" src="${thePost["commitsUserImg"]}">
                          </div>
                          <div>
                              <span class="suggestionsName">${thePost["commitsUser"]}: ${thePost["commits"]} </span>
                          </div>
                      </div>
                      <div id="loveCommentOpenPlace${i}">
                      </div>
                  </div>
                  <div class="myCommentPosiOpen" id="commitsAreaOpen${i}">
              </div>
          </div>
          <div class="paddTopBottom10px">
              <span class="timeStamp">Vor 10 Stunden</span>
          </div>
          <div class="showLike">
              <span>Gefällt <span id="likesSumOpen${i}">${thePost["likes"]}</span>
          </div>
          <div id="emojiCountainerOpen${i}" class="d-none emojiCountainer">
          </div>
          <div class="inputCountainerOpen">
              <div id="emojiBttnCountainerOpen${i}" class="emojiBttnOpen">
                  <button id="closeEmojiBttnOpen${i}" class="bttnPost d-none">
                      <img onclick="closeEmojiOpen(${i})" id="emojiImgOpen${i}" class="iconSizePost" src="icons/emojiOpen.png">
                  </button>
                  <button id="openEmojiBttnOpen${i}" class="bttnPost">
                      <img onclick="openEmojiOpen(${i})" id="emojiImgCloseOpen${i}" class="iconSizePost" src="icons/emoji.png">
                  </button>
              </div>
              <form class="formCountainer">
                  <input class="inputCommit" id="inputCommitOpen${i}" placeholder="Kommentar">
              </form>
              <div class="sendBttnCountainer">
                  <button class="sendBttn" onclick="addFirstCommitOpen(${i})">Posten
                  </button>
              </div>
          </div>
      </div>  
  </div>
  <!--Background Box for close-->
  <div onclick="closeBackground(${i})" id="menuBackground${i}" class="menuCountainerBackground d-none"></div>
  <!--Menu Box-->
  <div class="emojiBttn">
      <div id="menuCountainer${i}" class="menuCountainer d-none">
          <div onclick="menuOpenPost(${i})" class="paddTopBottom6px">Öffnen</div>
          <div onclick="deleteFollowBttn(${i})" class="paddTopBottom6px">Nicht mehr Folgen</div>
          <div onclick="menuClose(${i})" class="paddTopBottom6px">Abbrechen</div>
      </div>     
  <!--Share Box-->
      <div id="shareBox${i}" class="shareBoxCountainer d-none">
          <div>Möchtest du wirklich das Bild wirklich Teilen ?
          </div>
          <div class="shareBoxBttnCountainer">
              <div class="paddLeftRight12px">
                  <button class="shareBttn" onclick="share(${i})">Teilen
                  </button>
              </div>
              <div >
                  <button class="shareBttn" onclick="dontShare(${i})">Abbrechen
                  </button>
              </div>
          </div>
      </div>
  <!--Share Box part two-->
      <div id="shareBoxx${i}" class="shareBoxCountainer d-none">
          <div>Bild erfolgreich geteilt !
          </div>
          <div class="shareBoxBttnCountainer">
              <div>
                  <button class="shareBttn" onclick="OkeyBttn(${i})">Okey!
                  </button>
              </div>
          </div>
      </div>
  </div>
  <div id="myDropdown" class="dropdown">
  <!--Hier dropdown-Button-fenster-->
      <div class="dropdown-content ">
          <a href="index.html">Home</a>
          <a href="impressum.html">Impressum</a>
          <a href="dsgvo.html">Datenschutz</a>
      </div>
  </div>
  <!--footer-->
  <div> 
      <div class="footerCountainer">
          <div class="iconFooterCountainer">
              <button class="bttnPost">
                  <img onclick="reaktionClickLeft(${i})" class="iconFooterSizePost" src="icons/love.png">
              </button>
          </div>
          <div class="iconFooterCountainer">
              <button class="bttnPost">
          <img onclick="reaktionClickLeft(${i})" class="iconFooterSizePost" src="icons/emoji.png">
      </button>
      </div>
          <div class="iconFooterCountainer">
              <button class="bttnPost">
          <img onclick="reaktionClickLeft(${i})" class="iconFooterSizePost" src="icons/plus.png">
      </button>
      </div>
          <div class="iconFooterCountainer">
              <button class="bttnPost">
          <img onclick="reaktionClickLeft(${i})" class="iconFooterSizePost" src="icons/send.png">
      </button>
      </div>
          <div class="flex">
              <div class="iconFooterCountainer">
                  <button class="bttnHeader">
                      <img onclick="downMenuRe()" class="myUsericonSizeFooter" src="./img/myImg.jpg">
                  </button>
              </div>
          </div>       
      </div>
  </div>        
  `;
  }
  