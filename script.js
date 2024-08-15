const openBtn = document.querySelector('.open');
const page = document.querySelector('.page');
const body = document.querySelector('.body');
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', function () {
  body.classList.add('bg-gray-900');
  page.classList.add('moved');
  navBar.classList.remove('hidden');
  openBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  body.classList.remove('bg-gray-900');
  page.classList.remove('moved');
  navBar.classList.add('hidden');
  openBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
});

console.log(`The Sagar Singh`);
