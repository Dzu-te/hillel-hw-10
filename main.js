const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const slider = document.querySelector('.slider');
const carouselImage = document.querySelectorAll('.carousel-image');
const sliderContainer = document.querySelector('.slider-container');
const leftArrowWrapper = document.querySelector('.left-arrow-wrapper');



let currentStateX = 0
const carouselImageLength = carouselImage.length;
const carouselImageWidth = carouselImage[0].getBoundingClientRect().width;
const arrowContainerWidth = 10;

const rightArrowWidth = arrowRight.getBoundingClientRect().width + arrowContainerWidth;
const leftArrowWidth = arrowLeft.getBoundingClientRect().width + arrowContainerWidth;
const arrowsWidth = rightArrowWidth + leftArrowWidth;

sliderContainer.style.maxWidth = `${carouselImageWidth + arrowsWidth}px`;
console.log(leftArrowWidth, rightArrowWidth, arrowsWidth);

arrowRight.addEventListener('click', function () {
  currentStateX++;
  console.log('Right: ', carouselImageWidth);
  if (currentStateX >= carouselImageLength) {
    currentStateX = 0;
  }
  slider.style.transform = `translateX(${-currentStateX * carouselImageWidth}px)`;
});


arrowLeft.addEventListener('click', function () {
  currentStateX--;
  console.log('Left: ', carouselImageWidth)
  if (currentStateX < 0) {
    currentStateX = carouselImageLength - 1;
  }
  slider.style.transform = `translateX(${-currentStateX * 100}%)`;
});


const rightContainer = document.querySelector('.right-arrow-container').getBoundingClientRect().width;
console.log(rightContainer);