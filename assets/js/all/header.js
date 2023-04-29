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
