// responsive icons
let menuIcon = document.querySelectorAll(".header .menu-icon");
let menu = document.querySelectorAll(".header .responsive-list");
let menuLis = document.querySelectorAll(".header .responsive-list li");
menuIcon[0].addEventListener("click", () => {
  menu[0].classList.toggle("toogle");
  menuIcon[0].classList.toggle("x");
});
menuLis.forEach((li) => {
  li.addEventListener("click", function () {
    menu[0].classList.toggle("toogle");
    menuIcon[0].classList.toggle("x");
  });
});
// increasing nbrs 
let StatNbr = document.querySelectorAll(".increase")
let stared = false;
console.log(StatNbr)
window.addEventListener("scroll", function () {
  if (window.scrollY > StatNbr[0].getBoundingClientRect().top + 200) {
    if (!stared) {
      StatNbr.forEach((li) => {
        increase(li);
      });
      stared = true;
    }
  }
});
function increase(ele) {
  let goal = +ele.dataset.goal;
  let counter = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML == ele.dataset.goal) {
      clearInterval(counter);
    }
  }, 1500 / goal);
}
// auto type effect
let autoTypeText = " HEY, We are Light up";
let autoTypeEle = document.querySelectorAll(".home .container .info h1");
let i = 0;
function autoType() {
  if (i < autoTypeText.length) {
    autoTypeEle[0].innerHTML += autoTypeText.charAt(i);
    i++;
  }
  setTimeout(autoType, 100);
}
autoType();

// scroll up
let scrollUpIcon = document.querySelectorAll(".home .fa-angles-up");
window.onscroll = function () {
  if (scrollY > 633) {
    scrollUpIcon.forEach((e) => {
      e.style.display = "block";
    });
  } else {
    scrollUpIcon.forEach((e) => {
      e.style.display = "none";
    });
  }
};
scrollUpIcon.forEach((e) => {
  e.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
});
// boxes animation
let serBox = document.querySelectorAll(".services .box");
let cotactBox = document.querySelectorAll(".contact .info");
let carierBox = document.querySelectorAll(".carrier .box");
window.addEventListener("scroll", animate);
window.addEventListener("scroll", animate1);
window.addEventListener("scroll", animate2);
function animate() {
  let trigger = (window.innerHeight / 5) * 4;
  serBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 100) {
      e.classList.add("animate");
    }
  });
}
function animate1() {
  let trigger = (window.innerHeight / 5) * 4;
  cotactBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger) {
      e.classList.add("animate");
    }
  });
}
function animate2() {
  let trigger = (window.innerHeight / 5) * 4;
  cotactBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 80) {
      e.classList.add("animate");
    }
  });
}
function animate1() {
  let trigger = (window.innerHeight / 5) * 4;
  carierBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 80) {
      e.classList.add("animate");
    }
  });
}
// main-title animation
let mainTitle = document.querySelectorAll(".main-title");

window.addEventListener("scroll", animateTilte);
function animateTilte() {
  let trigger = (window.innerHeight / 5) * 4;
  mainTitle.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 80) {
      e.style.transform = "scale(1)";
    }
  });
}
//loeder
let loeder = document.querySelectorAll(".parentLoeder");
window.addEventListener("load", function () {
  loeder[0].classList.add("hide-loader");
});
