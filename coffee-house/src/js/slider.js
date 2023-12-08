
const favoriteSectionElement = document.querySelector(`.favorite`);

if (favoriteSectionElement !== null) {
  const beforeBtn = document.querySelector('.slider__before');
  const afterBtn = document.querySelector('.slider__after');
  const sliderTrack = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slider__card');
  const delay = 6000;
  const barDelay = 50;
  const barMaxWidth = 40;
  let timerEndTime;
  let counter = 1;
  let timerStepId;
  let timerBarId;
  // let slideIndex = 0;
  let currentXPosition = 0;
  let startXPosition = 0;
  let currentSlideTransform = 0;
  let endXPosition = 0;
  const pixelsForNextStep = 60;
  const trfRegExp = /([-0-9.]+(?=px))/;

  function setCounter(newCount) {
    if (newCount < 1) {
      counter = 3;
    } else if (newCount > 3) {
      counter = 1;
    } else {
      counter = newCount;
    }
    return counter
  };

  function setSlide(nerCounter) {
    resetTimerBar();
    counter = setCounter(nerCounter);
    document.getElementById('radio' + counter).checked = true;
    clearTimer();
    setTimers();
  }

  function onSlideClick(evt) {
    evt.preventDefault();
  }

  function onChangeSlide(evt){
    evt.preventDefault();
    setSlide(Number(evt.target.id.toString().slice(-1)));
  };

  function onClickBeforeSlide(evt){
    evt.preventDefault();
    setSlide(counter - 1);
  };

  function onClickAfterSlide(evt){
    evt.preventDefault();
    setSlide(counter + 1);
  };


  function setTimerSlide() {
    setSlide(counter + 1);
  }

  function setTimerPause() {
    clearTimer();
    timerEndTime = timerEndTime - Date.now();
  }
  function stopTimerPause() {
    setTimers(timerEndTime);
  }

  function setTimerBar() {
    const barElement = document.querySelector('.manual-btn' + counter + ' span');
    let widthBar = barElement.style.width;
    if(widthBar) {
      widthBar = Number(widthBar.replace('px', ''));
    }
    barElement.style.width = widthBar + barMaxWidth / delay * barDelay + 'px';
  }

  function resetTimerBar() {
    const barElement = document.querySelector('.manual-btn' + counter + ' span');
    barElement.style.width = '0px';
  }

  function clearTimer(){
    clearInterval(timerStepId);
    clearInterval(timerBarId);
  }

  function setTimers(slideDelay = delay){
    timerStepId = setInterval(setTimerSlide, slideDelay);
    timerBarId = setInterval(setTimerBar, barDelay);
    timerEndTime = Date.now() + slideDelay;
  }

  function swipeStart(evt) {
    const eventTouch = (evt.type.search('touch') !== -1) ? evt.touches[0] : evt;
    setTimerPause();

    currentXPosition = startXPosition = eventTouch.clientX;

    sliderTrack.style.transition = '';

    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
  }
  function swipeAction(evt) {
    const eventTouch = (evt.type.search('touch') !== -1) ? evt.touches[0] : evt;

    let style = sliderTrack.style.transform;
    let transform = +style.match(trfRegExp)[0];

    currentSlideTransform = startXPosition - eventTouch.clientX;
    startXPosition = eventTouch.clientX;

    sliderTrack.style.transform = `translate3d(${transform - currentSlideTransform}px, 0px, 0px)`;
  }
  function swipeEnd() {

    endXPosition = currentXPosition - startXPosition;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    
    if (Math.abs(endXPosition) > pixelsForNextStep) {
      if (currentXPosition < startXPosition) {
        setSlide(counter - 1);
      } else if (currentXPosition > startXPosition) {
        setSlide(counter + 1);
      }
    } else {
      stopTimerPause();
    }
    
    sliderTrack.style.transform = `translate3d(0px, 0px, 0px)`;
    sliderTrack.style.transition = `all 1s`;
  };

  setTimers();

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

  const inputElements = favoriteSectionElement.querySelectorAll('input[name="radio-btn"]');
  inputElements.forEach((inputElement) => inputElement.addEventListener(`change`, onChangeSlide));
  slides.forEach((cardElement) => cardElement.addEventListener(`click`, onSlideClick));
  beforeBtn.addEventListener(`click`, onClickBeforeSlide);
  afterBtn.addEventListener(`click`, onClickAfterSlide);
  sliderTrack.addEventListener('touchstart', swipeStart);
}