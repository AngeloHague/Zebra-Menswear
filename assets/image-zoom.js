const imgZoom = document.getElementById('image-zoom');
const masterImg = document.getElementById('image-zoom-master');
const magnImg = document.getElementById('image-zoom-magnified');

function imageZoom(element, img_url) {
    document.getElementById('image-zoom-url').href = img_url;
    masterImg.src = img_url;
    magnImg.src = img_url;
    imgZoom.classList.remove('hidden');
    imgZoom.classList.add('active');
}
function imageZoomClose() {
    imgZoom.classList.remove('active');
    imgZoom.classList.add('hidden');
}

imgZoom.addEventListener('click', function(event) {
    if (event.target.matches('.close') || !event.target.closest('.container') ) {
        imageZoomClose()
    }
}, false);

masterImg.addEventListener('mousemove', function(event) {
    clientX = event.clientX - masterImg.offsetLeft;
    clientY = event.clientY - masterImg.offsetTop;
    mWidth = masterImg.offsetWidth;
    mHeight = masterImg.offsetHeight;
    clientX = 50 - (clientX / mWidth * 100);
    clientY = 50 - (clientY / mHeight * 100);

    magnImg.style.transform = 'translate('+clientX+'%, '+clientY+'%) scale(2)';
})