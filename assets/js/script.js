/**
 * jQuery One Page Scroll
 */
function changeHeaderOnScroll(index) {
  if (index > 1) {
    $(".top-header").removeClass("header-transparent");
  } else {
    $(".top-header").addClass("header-transparent");
  }
}

function changeCurrentMenuItemTextColor(index) {
  removeAllMenuItemTextColor();

  let currentMenuItem = $("[data-page='" + index + "']");

  currentMenuItem.addClass("selected-item");
}

function removeAllMenuItemTextColor() {
  let topHeaderList = document.querySelectorAll(".top-header-list-item");

  topHeaderList.forEach(function (item) {
    item.classList.remove("selected-item");
  });
}

$(".main").onepage_scroll({
  sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000, // AnimationTime let you define how long each section takes to animate
  pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function (index) {
    changeHeaderOnScroll(index);

    changeCurrentMenuItemTextColor(index);
  }, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: 992, // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical", // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});

/**
 * Header
 */
function moveToSectionOnMenuClick(pageIndex) {
  $(".main").moveTo(pageIndex);
}

function removeTransparentHeaderIfIsMobile() {
  if ($(window).width() <= 768) {
    $(".top-header").removeClass("header-transparent");
  } else {
    $(".top-header").addClass("header-transparent");
  }
}

function scrollToSectionIfIsMobile() {
  // Obter a seção correspondente ao link clicado
  var target = $(this.hash);

  // Verificar se a seção existe
  if (target.length) {
    // Animação de scroll para a seção correspondente
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
}

$(document).ready(function () {
  $(".top-header-list-item").click(function () {
    var pageIndex = $(this).data("page");

    moveToSectionOnMenuClick(pageIndex);
  });
});

$(document).ready(function () {
  // Adicione um evento de clique em todos os links com a classe "scroll"
  $(".section-scroll").on("click", function (e) {
    // Impedir o comportamento padrão do link
    e.preventDefault();

    scrollToSectionIfIsMobile();
  });
});

$(document).ready(function () {
  if ($(window).width() >= 992) {
    $(".top-header-list-item-link").removeAttr("href");
  }
});

$(window).resize(function () {
  if ($(window).width() >= 992) {
    $(".top-header-list-item-link").removeAttr("href");
  } else {
    $(".top-header-list-item-link.link-top-hero").attr("href", "#top-hero");
    $(".top-header-list-item-link.link-about-me").attr("href", "#about-me");
    $(".top-header-list-item-link.link-qualifications").attr(
      "href",
      "#qualifications"
    );
    $(".top-header-list-item-link.link-portfolio").attr("href", "#portfolio");
    $(".top-header-list-item-link.link-projects").attr("href", "#projects");
    $(".top-header-list-item-link.link-contact").attr("href", "#contact");
  }
});

/**
 * Swiper
 */
var swiper = new Swiper(".multi-slider-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".one-slider-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/**
 * Tabs
 */
function changeTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

/**
 * Contact Float Button
 */
$(document).ready(function () {
  $(".contact-float-button").click(function () {
    $(this).toggleClass("open");
  });
});
