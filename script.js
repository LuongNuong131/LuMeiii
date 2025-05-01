const prompts = [
  'Ủa... thiệt hả cục cưng? 😳',
  'Suy nghĩ kỹ lại đi mà... 🥺',
  'Không là anh bùn lắm á 😢',
  'Đừng làm trái tim anh tan nát... 😔',
  'Năn nỉ cục dàng đó 🥹',
  'Thôi mà, bấm “Có” đi nè 😘',
  'Không là anh khóc thiệt đó 😭',
  'Đùa thôi, yêu anh mà đúng hông? 😚',
  'Làm ơn bấm “Có” đi, anh chờ lâu lắm rồi 🙏',
];

let promptIndex = 0;
const btnNo = document.querySelector('.no-button');
const btnYes = document.querySelector('.yes-button');
const typewriterElement = document.getElementById('typewriter');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isMusicPlaying = true;

// Typewriter effect
const text = typewriterElement.textContent;
typewriterElement.textContent = '';
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typewriterElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Music toggle
musicToggle.addEventListener('click', () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicToggle.textContent = '🔇';
  } else {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  }
  isMusicPlaying = !isMusicPlaying;
});

// No button click to cycle prompts
btnNo.addEventListener('click', () => {
  btnNo.textContent = prompts[promptIndex];
  promptIndex = (promptIndex + 1) % prompts.length;
});

// Yes button action
btnYes.addEventListener('click', () => {
  createHearts();
  setTimeout(() => {
    window.location.href = 'yes_page.html';
  }, 2000);
});

// Heart effect
function createHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#ff6f91' },
    shape: { type: 'heart', stroke: { width: 0, color: '#000000' } },
    opacity: { value: 0.5, random: true },
    size: { value: 10, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 2,
      direction: 'top',
      random: true,
      straight: false,
      out_mode: 'out',
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
  },
  retina_detect: true,
});
