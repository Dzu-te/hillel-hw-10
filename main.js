const intervalSetting = 3;

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const slider = document.querySelector('.slider');
const carouselImage = document.querySelectorAll('.carousel-image');
const sliderContainer = document.querySelector('.slider-container');
const leftArrowWrapper = document.querySelector('.left-arrow-wrapper');


let interval;
let currentStateX = 0;
let isMovingRight = true;
const carouselImageLength = carouselImage.length;
const carouselImageWidth = carouselImage[0].getBoundingClientRect().width;
const arrowContainerWidth = 10;

const rightArrowWidth = arrowRight.getBoundingClientRect().width + arrowContainerWidth;
const leftArrowWidth = arrowLeft.getBoundingClientRect().width + arrowContainerWidth;
const arrowsWidth = rightArrowWidth + leftArrowWidth;
sliderContainer.style.maxWidth = `${carouselImageWidth + arrowsWidth}px`;
console.log(leftArrowWidth, rightArrowWidth, arrowsWidth);



arrowRight.addEventListener('click', arrowRightClick);
arrowLeft.addEventListener('click', arrowLeftClick);
sliderContainer.addEventListener('mouseenter', stopSlider);
sliderContainer.addEventListener('mouseleave', startSlider);
const sliderDotsContainer = document.querySelector('.slider-dots-container');



generateDots();
updateDots();
startSlider();

function updateSlider() {
  slider.style.transform = `translateX(${-currentStateX * carouselImageWidth}px)`;
  updateDots();
}

function arrowRightClick() {
  currentStateX++;
  console.log('Right: ', carouselImageWidth);
  if (currentStateX >= carouselImageLength) {
    currentStateX = 0;
  }
  updateSlider();
}

function arrowLeftClick() {
  currentStateX--;
  console.log('Left: ', carouselImageWidth, (new Date()).getTime())
  if (currentStateX < 0) {
    currentStateX = carouselImageLength - 1;
  }
  updateSlider();
}

function startSlider() {
  interval = setInterval(() => {
    if (
      (isMovingRight && currentStateX === carouselImageLength - 1) ||
      (!isMovingRight && currentStateX === 0)
    ) {
      isMovingRight = !isMovingRight;
    }

    if (isMovingRight) {
      arrowRightClick();
    } else {
      arrowLeftClick();
    }
  }, intervalSetting * 1000);
}

function stopSlider() {
  clearInterval(interval);
  console.log('Остановка слайдера');
}


function generateDots() {
  sliderDotsContainer.innerHTML = '';
  carouselImage.forEach((img, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slide-dot');
    dot.dataset.index = index;

    dot.addEventListener('click', () => {
      currentStateX = Number(dot.dataset.index);
      updateSlider();
      updateDots();
    });

    sliderDotsContainer.appendChild(dot);
  });
}


function updateDots() {
  const dots = sliderDotsContainer.querySelectorAll('.slide-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  const activeDot = sliderDotsContainer.querySelector(`.slide-dot[data-index="${currentStateX}"]`);
  if (activeDot) {
    activeDot.classList.add('active');
  }
}