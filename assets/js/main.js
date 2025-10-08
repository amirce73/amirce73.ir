$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
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


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    ///===== Progress Bar

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

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


});

$('.button_spc--border').removeClass('in');

$(document).ready(function () {
    setTimeout(function () {
        $('.button_spc--border').addClass('in');
        setTimeout(function () {
            $('.button_spc--border').addClass('ready');
        }, 500)
    }, 1000)
})


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clubs").checked = true; // انتخاب اولیه اسلاید
});

const slide1 = document.getElementById('slide1');
const originalImgSrc = "assets/images/PVZ4.png";
const videoSrc = "assets/images/pvz4.mp4";
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
        <video controls autoplay style="width:70%; border-radius:15px;" id="video1">
            <source src="${videoSrc}" type="video/mp4">
            مرورگر شما ویدیو را پشتیبانی نمی‌کند.
        </video>
    `;
    const video = document.getElementById('video1');
    video.addEventListener('ended', showImage);
}

// شروع با عکس
showImage();

$('.button_spc').on('click', function (e) {
    e.preventDefault(); // جلوی رفتار پیش‌فرض لینک
    var target = $(this.hash); // بخش مقصد
    $('html, body').animate({
        scrollTop: target.offset().top - 73 // offset مثل page-scroll
    }, 1500); // سرعت 1 ثانیه
});


$('.footer-scroll').on('click', function (e) {
    e.preventDefault(); // جلوی رفتار پیش‌فرض لینک
    var target = $(this.hash); // بخش مقصد با hash
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 73 // offset مثل page-scroll
        }, 1500); // سرعت 1.5 ثانیه
    }
});


