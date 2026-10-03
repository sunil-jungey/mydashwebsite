// --------------------------------
// CURRENT YEAR
// --------------------------------

document.getElementById("year").textContent =
  new Date().getFullYear();


// --------------------------------
// EXPLORE BUTTON
// --------------------------------

const exploreButton =
  document.getElementById("exploreBtn");

exploreButton.addEventListener(
  "click",
  function () {

    document
      .getElementById("about")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


// --------------------------------
// CELEBRATION / CONFETTI
// --------------------------------

const celebration =
  document.getElementById("celebration");


const celebrationItems = [
  "🎉",
  "✨",
  "🎊",
  "💜",
  "⭐",
  "🔥",
  "💫"
];


function createConfetti() {

  const piece =
    document.createElement("div");

  piece.classList.add("confetti");

  piece.innerText =
    celebrationItems[
      Math.floor(
        Math.random()
        * celebrationItems.length
      )
    ];


  piece.style.left =
    Math.random() * 100 + "vw";


  piece.style.fontSize =
    12 +
    Math.random() * 18
    + "px";


  piece.style.animationDuration =
    3 +
    Math.random() * 4
    + "s";


  celebration.appendChild(piece);


  setTimeout(
    function () {
      piece.remove();
    },
    7000
  );

}


// Celebration when website opens

for (
  let i = 0;
  i < 40;
  i++
) {

  setTimeout(
    createConfetti,
    i * 100
  );

}


// Smaller celebration occasionally

setInterval(
  function () {

    for (
      let i = 0;
      i < 5;
      i++
    ) {

      setTimeout(
        createConfetti,
        i * 150
      );

    }

  },
  7000
);


// --------------------------------
// WELCOME MESSAGE
// --------------------------------

setTimeout(
  function () {

    console.log(
      "Welcome to Sunil's website 🚀"
    );

  },
  1000
);
// ================================
// WELCOME SCREEN
// ================================

const welcomeScreen =
  document.getElementById("welcome-screen");

const enterBtn =
  document.getElementById("enterBtn");

const particleContainer =
  document.querySelector(".welcome-particles");


enterBtn.addEventListener(
  "click",
  function () {

    welcomeScreen.classList.add(
      "hide-welcome"
    );

    setTimeout(
      function () {
        welcomeScreen.style.display = "none";
      },
      1000
    );

  }
);


// floating celebration particles

const welcomeIcons = [
  "✨",
  "💜",
  "⭐",
  "🎉",
  "🚀",
  "💫"
];


function createWelcomeParticle() {

  const particle =
    document.createElement("span");

  particle.classList.add(
    "welcome-particle"
  );


  particle.innerText =
    welcomeIcons[
      Math.floor(
        Math.random()
        * welcomeIcons.length
      )
    ];


  particle.style.left =
    Math.random() * 100 + "vw";


  particle.style.fontSize =
    14 +
    Math.random() * 18
    + "px";


  particle.style.animationDuration =
    5 +
    Math.random() * 5
    + "s";


  particleContainer.appendChild(
    particle
  );


  setTimeout(
    function () {
      particle.remove();
    },
    10000
  );

}


setInterval(
  createWelcomeParticle,
  500
);