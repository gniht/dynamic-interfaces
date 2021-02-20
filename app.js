let indexOffset = 0;
const circles = document.createElement('div');
circles.classList.add('wide-full');
circles.classList.add('centered');
circles.id = 'circles';
document.getElementById('circlesDiv').append(circles)
drawCircles ();


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
  drawCircles ();
});
circles.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  parseInt(e.target.id)
  drawCircles ();
});

console.log();

function drawCircles () {
  console.log(circles.firstChild) 
  const circleList = document.querySelector('.slideshow').children;
  let circleIndex = Math.abs(indexOffset%circleList.length);
  for (let i = 0; i < circleList.length; i++){
    let circle = document.createElement('button');
    circle.classList.add('circle');
    circle.id = `${i}`;
    if (circleIndex === i) {
      circle.classList.add('selected');      
    }
    circles.append(circle);
  }
  
}

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



