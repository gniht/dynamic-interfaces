
let index = 0;
let lastIndex;
const circles = document.createElement('div');
circles.classList.add('wide-full');
circles.classList.add('centered');
circles.id = 'circles';
document.getElementById('circlesDiv').append(circles)
drawCircles (circles);


let left = document.querySelector(".left");
let right = document.querySelector(".right");
updateSlides(document.querySelector('.slideshow').children);


left.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  lastIndex = index;
  if (index === 0) {
    index = (document.querySelector('.slideshow').children.length-1);
  } else {
    index -= 1;
  }
  document.getElementById(`${lastIndex}`).classList.remove('selected');
  document.getElementById(`${index}`).classList.add('selected');
   
  console.log(index);
  updateSlides(document.querySelector('.slideshow').children);
});

right.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  lastIndex = index;  
  if (index === (document.querySelector('.slideshow').children.length-1) ) {
    index = 0;
  } else {
    index += 1;
  }
  document.getElementById(`${lastIndex}`).classList.remove('selected');
  document.getElementById(`${index}`).classList.add('selected');    
  updateSlides(document.querySelector('.slideshow').children);    
});

circles.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  lastIndex = index;
  index = parseInt(e.target.id);
  if (parseInt(e.target.id) >= 0){
    document.getElementById(`${lastIndex}`).classList.remove('selected');
    e.target.classList.add('selected');
  }
  updateSlides(document.querySelector('.slideshow').children);
  
});

function drawCircles (lastIndex, index) {
  let ele = document.querySelector('#circles');
  const circleList = document.querySelector('.slideshow').children;
  if (ele.children.length === 0){
    for (let i = 0; i < circleList.length; i++){    
      let circle = document.createElement('button');
      circle.classList.add('circle');
      circle.id = `${i}`;
      if (i === index) {
        circle.classList.add('selected');      
      }
      ele.append(circle);
    }
  } 
    

  
  

  
}

function updateSlides (slidesArr) {  
  for (let i = 0; i < slidesArr.length; i++) {
    if (i === index) {
      slidesArr[i].classList.remove('hide');
      slidesArr[i].classList.add('show');
    } else {
      slidesArr[i].classList.remove('show');
      slidesArr[i].classList.add('hide');
    }
  }     
}



