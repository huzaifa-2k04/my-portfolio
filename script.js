document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero-content');
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
