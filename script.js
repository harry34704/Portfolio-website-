const welcomeText = document.getElementById('welcomeText');

welcomeText.addEventListener('mouseenter', () => {
  welcomeText.classList.add('zoom-animation');
});

welcomeText.addEventListener('mouseleave', () => {
  welcomeText.classList.remove('zoom-animation');
});

const developerText = document.getElementById('developerText');
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff']; // List of colors

setInterval(() => {
  // Generate a random color from the list
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  developerText.style.color = randomColor;
}, 1000); // Change color every second

// Toggle navbar collapse on click
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navbar-collapse').classList.toggle('active');
});
