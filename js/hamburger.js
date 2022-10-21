
const burgurIcon = document.querySelector('.burgur-icon');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

burgurIcon.addEventListener('click', () => {
  burgurIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
});