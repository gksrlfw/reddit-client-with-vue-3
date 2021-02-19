import usePosts from "@/hooks/usePosts.js";

export const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};

const getWindowHeight = () => {
  const html = document.documentElement;
  const body = document.body;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
};

const getCurrnetScrollHeight = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
};

function _lazyLoadWithObserve() {
  const images = document.querySelectorAll(".materialboxed");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.getAttribute("data-lazy");
          image.setAttribute("src", src);
          io.unobserve(image);
        }
      });
    });

    images.forEach(image => {
      io.observe(image);
    });
  }
  // window에 observer api가 없는 경우.
  else {
    //_lazyLoad();
  }
}
// infinity 스크롤 적용
export async function onScrollWithInfinity(subredditUrl) {
  try {
    _lazyLoadWithObserve();
    if (getCurrnetScrollHeight() < getWindowHeight() - window.innerHeight - 100)
      return;
    console.log("Do FETCH!!!!!!!!!!!!!!!!!!!!");
    const newPostsInfo = await usePosts(subredditUrl);
    return newPostsInfo;
  } catch (err) {
    console.error(err);
  }
}
