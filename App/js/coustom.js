var header = document.querySelector('header');

var stickyNav = e =>{
  header.classList.toggle('sticky', window.scrollY > 50);
}

window.addEventListener('scroll', stickyNav);