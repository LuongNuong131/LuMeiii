// Confetti effect
function launchConfetti() {
  confetti({
    particleCount: 80,
    spread: 60,
    origin: { y: 0.6 },
    colors: ['#ff4081', '#ff8a9d', '#c2185b'],
  });
}

// Trigger confetti initially and every 3 seconds
launchConfetti();
setInterval(launchConfetti, 3000);

// Carousel logic
const frames = document.querySelectorAll('.photo-frame');
let currentIndex = 0;

function showNextImage() {
  frames[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % frames.length;
  frames[currentIndex].classList.add('active');
}

// Change image every 4 seconds for a calmer pace
setInterval(showNextImage, 4000);

// Back button
const backButton = document.querySelector('.back-button');
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
