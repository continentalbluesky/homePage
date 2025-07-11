// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0"; 
  ctx.font = fontSize + "px monospace";
  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(draw, 50);

// Search filtering
const searchBar = document.getElementById('searchBar');
const posts = document.querySelectorAll('.post');

searchBar.addEventListener('input', function () {
  const searchText = this.value.toLowerCase();
  posts.forEach(post => {
    const txt = post.innerText.toLowerCase();
    post.style.display = txt.includes(searchText) ? '' : 'none';
  });
});

// adjust canvas size on resize
window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});