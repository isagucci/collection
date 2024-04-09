function hideImage() {
    var image = document.querySelector('.main');
    image.style.display = 'none';
}

let trigger = document.querySelector("img.main");
trigger.addEventListener("click",hideImage);