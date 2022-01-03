console.log(`connected`);
const header = document.querySelector(".header-container");
const menuBar = document.querySelector(".header-menu-container");

const headerObserverCallBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    menuBar.classList.add("header-menu-container-toggle");
  } else {
    menuBar.classList.remove("header-menu-container-toggle");
  }
};

const headerObserver = new IntersectionObserver(headerObserverCallBack, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
