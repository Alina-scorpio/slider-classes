class SwipeCarousel extends Carousel {
  _initListeners() {
    super._initListeners();
    this.slidesContainer.addEventListener('touchstart', this.swipeStart.bind(this));
    this.slidesContainer.addEventListener('mousedown', this.swipeStart.bind(this));
    this.slidesContainer.addEventListener('touchend', this.swipeEnd.bind(this));
    this.slidesContainer.addEventListener('mouseup', this.swipeEnd.bind(this));
  }

  swipeStart(e) {
    e.preventDefault();
    this.startPosX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
  }

  swipeEnd(e) {
    this.endPosX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
    if (this.endPosX - this.startPosX > 100) this.prevHandler();
    if (this.endPosX - this.startPosX < -100) this.nextHandler();
  }
}