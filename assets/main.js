$(function () {

    "use strict";

    //===== تشخیص موبایل
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    //===== Preloader
    $(window).on('load', function (event) {
        if (isMobile) {
            $('.preloader').fadeOut(200); // سریع‌تر در موبایل
        } else {
            $('.preloader').delay(500).fadeOut(500);
        }
    });

    //===== Sticky Navbar
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });


    var mobileCheck = false;

    if (window.innerWidth < 768) {
        mobileCheck = true;
    }

    var img = document.querySelector('.header_hero_image img');

    if (mobileCheck) {
        img.style.width = "200";
        img.style.display = "block";
        img = null;
    }

    //===== Section Menu Active
    var scrollLink = $('.page-scroll');
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    //===== Close navbar-collapse when a clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
        if (isMobile) $(".navbar-toggler").removeClass("active");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    //===== Progress Bar
    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }

    //===== Back to top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, isMobile ? 700 : 1500); // سریع‌تر در موبایل
    });

});

//===== Button Animation
$('.button_spc--border').removeClass('in');

$(document).ready(function () {
    setTimeout(function () {
        $('.button_spc--border').addClass('in');
        setTimeout(function () {
            $('.button_spc--border').addClass('ready');
        }, 500)
    }, 1000)
});

//===== Swiper
var swiper = new Swiper(".mySwiper", {
    effect: isMobile ? "slide" : "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: isMobile ? {} : {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: !isMobile ? {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    } : {},
});

//===== Initial Slide Selection
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clubs").checked = true;
});

//===== Slide Image & Video
const slide1 = document.getElementById('slide1');
const originalImgSrc = "/assets/images/PVZ4.png";
const videoSrc = "/freelancer-free-lite/assets/images/pvz4.mp4";
const captionText = "PVZ4";

function showImage() {
    slide1.innerHTML = `
        <img src="${originalImgSrc}" alt="${captionText}" class="clickable-img">
        <button class="play-btn">&#9658;</button>
    `;
    const btn = slide1.querySelector('.play-btn');
    btn.addEventListener('click', showVideo);
}

function showVideo() {
    slide1.innerHTML = `
        <video controls autoplay style="width:${isMobile ? '95%' : '70%'}; border-radius:15px;" id="video1">
            <source src="${videoSrc}" type="video/mp4">
            مرورگر شما ویدیو را پشتیبانی نمی‌کند.
        </video>
    `;
    const video = document.getElementById('video1');
    video.addEventListener('ended', showImage);
}

// شروع با عکس
showImage();

//===== Smooth Scroll Buttons
$('.button_spc, .footer-scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 73
        }, isMobile ? 700 : 1500); // سریع‌تر در موبایل
    }
});
