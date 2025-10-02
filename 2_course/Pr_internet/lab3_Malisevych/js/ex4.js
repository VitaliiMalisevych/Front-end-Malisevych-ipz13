let imgs = ["../images/im2.jpeg","../images/im1.jpeg","../images/im3.jpeg","../images/im4.jpeg"];
let index = 0;
const viewer = document.getElementById("viewer");

function show() {
    viewer.src = imgs[index];
}
function next() {
    index = (index + 1) % imgs.length;
    show();
}
function prev() {
    index = (index - 1 + imgs.length) % imgs.length;
    show();
}

show();