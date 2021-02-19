export function smoothScroll(targets, duration) {
  const target = document.querySelector(targets);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, 0);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

export function smooth() {
  console.log("asdfasdf");
  let stop;
  function render() {
    console.log(0, window.scrollY);
    if (window.scrollY > 0) {
      const a = window.scrollY - 10;
      window.scrollTo(0, a);
      stop = requestAnimationFrame(render);
    }
  }

  render();
}
