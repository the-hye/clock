const body = document.querySelector("body");

const IMG_NUMBER = 5;

// image load -> 툭툭 끊김 현상 없애기
// function handleImgLoad() {
//     console.log("finish loaded")
// }

function paintImage(imagNumber) {
    const image = new Image();
    image.src = `images/${imagNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    // image.addEventListener("loaded", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();