function hideImage() {
    var image = document.querySelector('.main');
    image.style.display = 'none';
    var clickSound = document.getElementById('clickSound');
    clickSound.play();
}

let trigger = document.querySelector("img.main");
trigger.addEventListener("click", hideImage);