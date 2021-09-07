function lazyLoad() {
  var controle = !1;
  window.onscroll = function () {
    if (!controle) {
      (controle = !0),
        setTimeout(function () {
          controle = !1;
        }, 200);
      for (
        var e = document.querySelectorAll("img[data-src]"), t = 0;
        t < e.length;
        t++
      )
        e[t].getBoundingClientRect().top <
          window.innerHeight + (3 * window.innerHeight) / 4 &&
          (e[t].src = e[t].getAttribute("data-src"));
    }
  };
}
lazyLoad();
function menuMobile() {
  const btn = document.querySelector(".btn_mobile");
  const menu = document.querySelector(".menu");
  btn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");
  }
}
menuMobile();
