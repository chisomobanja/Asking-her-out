function startQuestions() {
  document.getElementById("questions").style.display = "block";
}

function answerYes() {
  document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "CHUMAAA!!❤️👺";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText = "It's 2 AM, I could easily stop but I don't want to wait anymore"
  + "\nI've been thinking about you, about me, about us, \nthe time we've spent talking and it's hard to ignore how you make me feel."
  + " \nYou're funny, attractive, loving, caring, smart, creative, passionate about everything, the list could go on." 
  + " \nYou play a very important role in my life, I strive everyday to do the same.\n I love you to the moon and back." +
  "\n I find genuine happiness every time we talk and wouldn't trade this FRIENDSHIP for anything."
  + "\nFriendship?\n Whack!"
  + " \nI've really enjoyed our time together but enough of that \n Chuma, will you please be my girlfriend?"
  + "\nI'm ready to put in everything it takes to make you happy, I hope you are too";
  //+ "\n\n\n\nThis is the year we get minted innit bruv?🥶";
  
}

function answerNo() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "CHUMAAA!!❤️👺";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText = "Iwe chi Chuma, why do you like lying🤣  \n We'll fight🤣";
  showConfetti()

}

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
    target: 'confetti-canvas',
    respawn: true,
    colors: ['#ff0000', '#00ff00', '#0000ff'], 
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confetti.clear();
  }, 5000);
}