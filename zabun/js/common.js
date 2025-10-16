// JavaScript Document

// sp-navのトグル設定
function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById('js-hamburger');
  const blackBg = document.getElementById('js-black-bg');

  if (hamburger && blackBg) {
    hamburger.addEventListener('click', () => body.classList.toggle('nav-open'));
    blackBg.addEventListener('click', () => body.classList.remove('nav-open'));
  }
}
toggleNav();

// ナビゲーション（アコーディオン動作設定）
function setAccordionEvent() {
  // イベントの初期化
  $('.dropdown').off('mouseenter mouseleave');
  $('.acc_click').off('click');

  if (window.matchMedia("(min-width: 1000px)").matches) {
    // 1000px以上：ホバー動作
    let hoverTimeout;
    $('.dropdown').on('mouseenter', function () {
      clearTimeout(hoverTimeout);
      $(this).children(".box").stop(true, true).slideDown();
      $(this).children('.acc_click').addClass('close');
    }).on('mouseleave', function () {
      const $this = $(this);
      hoverTimeout = setTimeout(() => {
        $this.children(".box").stop(true, true).slideUp();
        $this.children('.acc_click').removeClass('close');
      }, 200);
    });
  } else {
    // 1000px未満：クリック動作
    $('.acc_click').on('click', function (e) {
      e.preventDefault(); // リンクのデフォルト動作を無効化
      const $dropdown = $(this).closest('.dropdown');
      $dropdown.find(".box").stop(true, true).slideToggle();
      $(this).toggleClass('close');
    });
  }
}

// ページ読み込み時およびリサイズ時に設定を適用
$(document).ready(setAccordionEvent);
$(window).resize(setAccordionEvent);


// swiper
document.addEventListener('DOMContentLoaded', () => {
  const readSwiper = new Swiper('.zabun-read__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 16 },
      1200: { slidesPerView: 3, spaceBetween: 16 },
    },
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    observer: true,
    observeParents: true,
    speed: 3000,
  });
});



