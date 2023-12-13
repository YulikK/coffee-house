const favoriteSectionElement = document.querySelector(`.favorite`);

if (favoriteSectionElement !== null) {
  const beforeBtn = document.querySelector('.slider__before');
  const afterBtn = document.querySelector('.slider__after');
  const sliderTrack = document.querySelector('.slides');
  const slideElement = document.querySelectorAll('.slide');
  const delay = 6000;
  const barDelay = 10;
  let isMouseOver = false;
  let isSwipe = false;
  let timerEndTime;
  let counter = 1;
  let timerStepId;
  let timerBarId;
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

  function setSlide(newCounter) {
    isMouseOver = false;
    isSwipe = false;
    resetTimerBar();
    counter = setCounter(newCounter);
    document.getElementById('radio' + counter).checked = true;
    clearTimer();
    setTimers();
  }

  function onSlideMouseOver(evt){
    if (!isMouseOver && evt.currentTarget.classList.contains('slide') && evt.pointerType == 'mouse') {
      isMouseOver = true;
      setTimerPause();
      evt.currentTarget.addEventListener('pointerleave', onSlideMouseOut);
    }
  }
  function onSlideMouseOut(evt){
    if(evt.currentTarget.classList.contains('slide')) {
      isMouseOver = false;
      stopTimerPause();

    }
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
    if(isSwipe || isMouseOver){
      clearTimer();
      timerEndTime = timerEndTime - Date.now();
      timerEndTime = Math.min(Math.abs(timerEndTime), delay);
    }
  }
  function stopTimerPause() {
    setTimers(timerEndTime);
  }

  function setTimerBar() {
    const barElement = document.querySelector('.manual-btn' + counter + ' span');
    const timeToEnd = timerEndTime - Date.now();
    const timePass = delay - timeToEnd;
    barElement.style.width = timePass * 100 / delay + '%';
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
    if(!isMouseOver && !isSwipe) {
      slideDelay = Math.min(Math.abs(slideDelay), delay);
      timerStepId = setInterval(setTimerSlide, slideDelay);
      timerBarId = setInterval(setTimerBar, barDelay);
      timerEndTime = Date.now() + slideDelay;
    }
  }

  function swipeStart(evt) {
    evt.preventDefault();
    const eventTouch = (evt.type.search('touch') !== -1) ? evt.touches[0] : evt;
    isSwipe = true;

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
    isSwipe = false;

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
    sliderTrack.style.transition = `all 2s`;
  };

  setTimers();

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

  const inputElements = favoriteSectionElement.querySelectorAll('input[name="radio-btn"]');
  inputElements.forEach((inputElement) => inputElement.addEventListener(`change`, onChangeSlide));
  slideElement.forEach((cardElement) => cardElement.addEventListener(`pointerover`, onSlideMouseOver));
  beforeBtn.addEventListener(`click`, onClickBeforeSlide);
  afterBtn.addEventListener(`click`, onClickAfterSlide);
  sliderTrack.addEventListener('touchstart', swipeStart);
}