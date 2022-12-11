document.documentElement.className = "js"
var variantStock = {};
var cartContents;
var cartCount = 0;
var gError;

function enableSearchBtn() {
    searchBtn.disabled = false;
}
function scrollToAnchor(selectedAnchor) {
    document.querySelector(selectedAnchor).scrollIntoView({
        behavior: 'smooth'
    });
}

function filterProductTitle(title) {
    let product_id = null;
    if (title[0] == "I" && title[1] == "D") {
        for (var i = 0; i < title.length; i++) {
            let c = title[i]
            if (c===' ' || c==='-') {
                let product_id = title.slice(0, i)
                let product_title = title.slice(i+1, title.length)
                return {product_id, product_title};
            }
        }
    }
    return {product_id, title};
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