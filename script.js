let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
    displayNone();
    
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }
    console.log(imgNum);

    pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
    displayNone();

    imgNum--;
    console.log(imgNum);

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener('click',moveRight);

leftBtn.addEventListener('click',moveLeft);

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}

let slider = document.querySelector('.slider-wrapper');

let startX = 0;
let endX = 0;

if (slider) {
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
}

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;

    handleSwipe();
});

function handleSwipe() {
    let diff = endX - startX;

    if (diff > 50) {
        moveLeft();   // swipe desno → prethodna slika
    } 
    else if (diff < -50) {
        moveRight();  // swipe levo → sledeća slika
    }
}
