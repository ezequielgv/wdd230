// Toggle del menú
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  hamburger.classList.toggle('active');
});