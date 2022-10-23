document.documentElement.className = "js"
var variantStock = {};
var cartContents;
var cartCount = 0;
var gError;

function enableSearchBtn() {
    searchBtn.disabled = false;
}

function filterProductTitle(title) {
    for (var i = 0; i < title.length; i++) {
        let c = title[i]
        if (c===' ' || c==='-') {
            return title.slice(i+1, title.length);
        }
    }
    return title;
}
// let navOpen = false;

// function toggleNav(element) {
//   let nav = document.getElementById("nav");
//     if (!navOpen) {
//       element.classList.add('open');
//       nav.className = 'active';
//       navOpen = true;
//     } else {
//       element.classList.remove('open');
//       nav.className = '';
//       navOpen = false;
//     }
// }