const continueBtn = document.getElementById("continueBtn");
const nameForm = document.getElementById("nameForm");
const curtain = document.getElementById("curtain");
const leftCurtain = document.querySelector(".curtain.left");
const rightCurtain = document.querySelector(".curtain.right");
const content = document.getElementById("content");
const welcomeMessage = document.getElementById("welcomeMessage");
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];

// Confetti generator
function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: 10,
      h: 10,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speed: Math.random() * 3 + 2,
    });
  }
}

// Animate confetti
function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((p) => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.w, p.h);
    p.y += p.speed;
    if (p.y > confettiCanvas.height) {
      p.y = -10;
      p.x = Math.random() * confettiCanvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

// Typewriter effect
function typeWriter(text, element, delay = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    } else {
      element.style.borderRight = "none"; // remove cursor after complete
    }
  }
  typing();
}

continueBtn.addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  // Hide form
  nameForm.style.display = "none";

  // Show curtain
  curtain.style.visibility = "visible";

  // Start curtain animation
  setTimeout(() => {
    leftCurtain.style.transform = "translateX(-100%)";
    rightCurtain.style.transform = "translateX(100%)";

    // After curtain opens
    setTimeout(() => {
      content.style.opacity = "1";
      content.style.transform = "scale(1)";

      // Confetti start
      createConfetti();
      drawConfetti();

      // Typewriter welcome message
      const text = `Welcome, ${name}! 🎓`;
      welcomeMessage.textContent = "";
      typeWriter(text, welcomeMessage, 120);
    }, 3000);
  }, 500);
});
    // Typewriter welcome message
    const text = `Welcome, ${name}! 🎓`;
    welcomeMessage.textContent = "";
    typeWriter(text, welcomeMessage, 120);

    // Redirect to notes page after 8 seconds
    setTimeout(() => {
      window.location.href = "Notes/notes.html";
    }, 12000);

    // Live search
document.getElementById("searchBox").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

// Filter by category
function filterCategory(category) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

