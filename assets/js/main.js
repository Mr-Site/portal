// زیرمنو | سوالات متدال

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("menuActive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// باز شدن منو همبرگری

function openMenuMobile() {
  kadrMenuMobile = document.querySelector(".kadrMenuMobile");
  iconOpen = document.querySelector(".iconOpenMenu");
  iconClose = document.querySelector(".iconCloseMenu");
  kadrDisableScroll = document.querySelector(".kadrDisableScroll");

  iconOpen.style.zIndex = "0";
  iconOpen.style.visibility = "hidden";

  iconClose.style.zIndex = "2";
  iconClose.style.visibility = "visible";

  kadrDisableScroll.style.visibility = "visible";

  kadrMenuMobile.style.right = "0";

  // غیرفعال کردن اسکرول صفحه
  document.body.classList.add("no-scroll");
}

function closeMenuMobile() {
  kadrMenuMobile.style.right = "-500px";

  iconClose.style.zIndex = "0";
  iconClose.style.visibility = "hidden";

  iconOpen.style.zIndex = "2";
  iconOpen.style.visibility = "visible";

  kadrDisableScroll.style.visibility = "hidden";

  // فعال‌سازی دوباره اسکرول صفحه
  document.body.classList.remove("no-scroll");
}
