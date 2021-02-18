let indexOffset = 0;

let left = document.querySelector(".left");
let right = document.querySelector(".right");
updateSlides(document.querySelector('.slideshow').children);

left.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  indexOffset -= 1;
  updateSlides(document.querySelector('.slideshow').children);
});
right.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  indexOffset += 1;  
  updateSlides(document.querySelector('.slideshow').children);
});

function updateSlides (slidesArr) {
  let selectedIndex = Math.abs(indexOffset%slidesArr.length);
  for (let i = 0; i < slidesArr.length; i++) {
    if (i === selectedIndex) {
      slidesArr[i].classList.remove('hide');
      slidesArr[i].classList.add('show');
    } else {
      slidesArr[i].classList.remove('show');
      slidesArr[i].classList.add('hide');
    }
  }   
}


