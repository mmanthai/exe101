class FunctionCommon {
  scrollToLeft(frameName) {
    let frame = document.querySelector(`.${frameName}`);
    frame.scrollBy(-380, 0);
  }

  scrollToRight(frameName) {
    let frame = document.querySelector(`.${frameName}`);
    frame.scrollBy(380, 0);
  }
}

export default new FunctionCommon();
