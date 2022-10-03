document.documentElement.className = "js"
let navOpen = false;

function toggleNav(element) {
  let nav = document.getElementById("nav");
    if (!navOpen) {
      element.classList.add('open');
      nav.className = 'active';
      navOpen = true;
    } else {
      element.classList.remove('open');
      nav.className = '';
      navOpen = false;
    }
}