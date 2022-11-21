let bubbleUserName = [
  "Sabse44",
  "Anna88",
  "Sabinje",
  "Alessio_45",
  "3_Kevin",
  "32Kai",
  "Eli.ana",
  "Nicole24",
  "Julkaaa",
  "N24",
];


let bubbleUserImg = [
  "img/user-profile16.jpg",
  "img/user-profile15.jpg",
  "img/user-profile14.jpg",
  "img/user-profile13.jpg",
  "img/user-profile12.jpg",
  "img/user-profile11.jpg",
  "img/user-profile10.jpg",
  "img/user-profile9.jpg",
  "img/user-profile8.jpg",
  "img/user-profile7.jpg",
];


let suggestions = [{
      suggestionsName: "Kilian11",
      suggestionsInfo: "Folgt dir",
      suggestionsImg: "img/user-profile17.jpg",
  },
  {
      suggestionsName: "Mar-cel1",
      suggestionsInfo: "Neu auf Postgram",
      suggestionsImg: "img/user-profile18.jpg",
  },
  {
      suggestionsName: "Luca441",
      suggestionsInfo: "Folgt dir ",
      suggestionsImg: "img/user-profile19.jpg",
  },
  {
      suggestionsName: "SStefan11",
      suggestionsInfo: "Folgt dir",
      suggestionsImg: "img/user-profile20.jpg",
  },
  {
      suggestionsName: "Frank_lin",
      suggestionsInfo: "Neu auf Postgram",
      suggestionsImg: "img/user-profile21.jpg",
  },
  {
      suggestionsName: "ReneIIa",
      suggestionsInfo: "Weil du Max Mustermann Folgst",
      suggestionsImg: "img/user-profile22.jpg",
  },
];


function renderBubble() {
  let bubbleNames = document.getElementById("sidebar");
  for (let i = 0; i < bubbleUserName.length; i++) {
      const bubblePerson = bubbleUserName[i];
      const bubbleImg = bubbleUserImg[i];
      bubbleNames.innerHTML += sidebarHTML(i, bubblePerson, bubbleImg);
  }
}


function renderLogInUser() {
  let LogInUsers = document.getElementById("mainPosiRe");
  for (let u = 0; u < myUser.length; u++) {
      const User = myUser[u];
      LogInUsers.innerHTML = logInUserHTML(u, User);
      renderSuggestionsSection();
  }
}


function renderSuggestionsSection() {
  let footerSection = document.getElementById("proposals");
  for (let i = 0; i < suggestions.length; i++) {
      const section = suggestions[i];
      footerSection.innerHTML += rightSectionHTML(i, section);
  }
}


function follow(i) {
  let followClicks = document.getElementById(`follow${i}`);
  let notFollowClicks = document.getElementById(`notFollow${i}`);
  for (let i = 0; i < suggestions.length; i++) {
      followClicks.classList.add("d-none");
      notFollowClicks.classList.remove("d-none");
  }
}


function notFollow(i) {
  let followClicks = document.getElementById(`follow${i}`);
  let notFollowClicks = document.getElementById(`notFollow${i}`);
  for (let i = 0; i < suggestions.length; i++) {
      followClicks.classList.remove("d-none");
      notFollowClicks.classList.add("d-none");
  }
}