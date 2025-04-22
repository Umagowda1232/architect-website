const backDrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', ()=>{
  mobileNav.style.display = 'block';
  backDrop.style.display = 'block';
})

backDrop.addEventListener('click', ()=>{
  backDrop.style.display = 'none';
  mobileNav.style.display = 'none';
})