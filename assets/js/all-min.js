$(document).ready(function(){$(".contact-float-button").click(function(){$(this).toggleClass("open")})});function moveToSectionOnMenuClick(pageIndex){$(".main").moveTo(pageIndex)}function removeTransparentHeaderIfIsMobile(){if($(window).width()<=768){$(".top-header").removeClass("header-transparent")}else{$(".top-header").addClass("header-transparent")}}function scrollToSectionIfIsMobile(){var target=$(this.hash);if(target.length){$("html, body").animate({scrollTop:target.offset().top},1e3)}}$(document).ready(function(){$(".top-header-list-item").click(function(){var pageIndex=$(this).data("page");moveToSectionOnMenuClick(pageIndex)})});$(document).ready(function(){$(".section-scroll").on("click",function(e){e.preventDefault();scrollToSectionIfIsMobile()})});$(document).ready(function(){if($(window).width()>=992){$(".top-header-list-item-link").removeAttr("href")}});$(window).resize(function(){if($(window).width()>=992){$(".top-header-list-item-link").removeAttr("href")}else{$(".top-header-list-item-link.link-top-hero").attr("href","#top-hero");$(".top-header-list-item-link.link-about-me").attr("href","#about-me");$(".top-header-list-item-link.link-qualifications").attr("href","#qualifications");$(".top-header-list-item-link.link-portfolio").attr("href","#portfolio");$(".top-header-list-item-link.link-projects").attr("href","#projects");$(".top-header-list-item-link.link-contact").attr("href","#contact")}});function changeHeaderOnScroll(index){if(index>1){$(".top-header").removeClass("header-transparent")}else{$(".top-header").addClass("header-transparent")}}function changeCurrentMenuItemTextColor(index){removeAllMenuItemTextColor();let currentMenuItem=$("[data-page='"+index+"']");currentMenuItem.addClass("selected-item")}function removeAllMenuItemTextColor(){let topHeaderList=document.querySelectorAll(".top-header-list-item");topHeaderList.forEach(function(item){item.classList.remove("selected-item")})}$(".main").onepage_scroll({sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:true,updateURL:false,beforeMove:function(index){changeHeaderOnScroll(index);changeCurrentMenuItemTextColor(index)},afterMove:function(index){},loop:false,keyboard:true,responsiveFallback:992,direction:"vertical"});var swiper=new Swiper(".multi-slider-swiper",{effect:"coverflow",grabCursor:true,centeredSlides:true,slidesPerView:"auto",loop:true,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var swiper=new Swiper(".one-slider-swiper",{effect:"coverflow",grabCursor:true,centeredSlides:true,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},pagination:{el:".swiper-pagination"}});function changeTab(evt,tabName){var i,tabcontent,tablinks;tabcontent=document.getElementsByClassName("tabcontent");for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none"}tablinks=document.getElementsByClassName("tablinks");for(i=0;i<tablinks.length;i++){tablinks[i].className=tablinks[i].className.replace(" active","")}document.getElementById(tabName).style.display="block";evt.currentTarget.className+=" active"}document.getElementById("defaultOpen").click();