console.log(`connected`);
const header = document.querySelector(".header-container");
const menuBar = document.querySelector(".header-menu-container");
const menuItem = document.querySelectorAll(".menu-option");

const gallery = document.querySelector(".gallery-container");
const gallleryItem_1 = document.querySelector(".gallery-side-1");
const galleryItem_2 = document.querySelector(".gallery-side-2");

const homebtn = document.querySelectorAll(".home");
const abBtn = document.querySelectorAll(".about");
const galleryBtn = document.querySelectorAll(".photos");
const contrubuteBtn = document.querySelectorAll(".contribute");

homebtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".header-container").scrollIntoView();
  });
});
abBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".about-container").scrollIntoView();
  });
});
galleryBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".gallery-container").scrollIntoView();
  });
});

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

const galleryObserverCallBack = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    gallleryItem_1.style.left = 0;
    galleryItem_2.style.right = 0;
  } else {
    gallleryItem_1.style.left = "-100%";
    galleryItem_2.style.right = "-100%";
  }
};
const galleryObserver = new IntersectionObserver(galleryObserverCallBack, {
  root: null,
  threshold: 0.25,
});

headerObserver.observe(header);
galleryObserver.observe(gallery);

menuItem.forEach((ele) =>
  ele.addEventListener("mouseover", () => {
    ele.classList.add("location-marker");
  })
);
menuItem.forEach((ele) => {
  ele.addEventListener("mouseout", () => {
    ele.classList.remove("location-marker");
  });
});
