$(function () {

    const experienceSlides = ["clubs", "hearts", "spades", "diamonds"];
    let currentExperienceIndex = 0;

    function showExperienceSlide(index) {
        // مدیریت چرخش بی‌نهایت اسلایدر (Loop)
        if (index < 0) index = experienceSlides.length - 1;
        if (index >= experienceSlides.length) index = 0;
        currentExperienceIndex = index;

        // انتخاب و فعال کردن رادیو باتن مربوطه
        const radioBtn = document.getElementById(experienceSlides[currentExperienceIndex]);
        if (radioBtn) {
            radioBtn.checked = true;
        }
    }

    // پیدا کردن دکمه‌های ناوبری چپ و راست
    const prevBtn = document.querySelector('#experience .nav-btn.prev');
    const nextBtn = document.querySelector('#experience .nav-btn.next');

    // افزودن رویداد کلیک به دکمه قبلی
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault(); // جلوگیری از رفتارهای ناخواسته فرم
            showExperienceSlide(currentExperienceIndex - 1);
        });
    }

    // افزودن رویداد کلیک به دکمه بعدی
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault(); // جلوگیری از رفتارهای ناخواسته فرم
            showExperienceSlide(currentExperienceIndex + 1);
        });
    }

    // مقداردهی اولیه برای نمایش اسلاید اول
    showExperienceSlide(0);


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

    var mobileCheck = false;

    if (window.innerWidth <= 767) {
        mobileCheck = true;
    }

    if (mobileCheck) {

    }
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

const imgHolder = document.querySelector('#first_slide .project-img-holder');
const originalImgSrc = "/assets/images/PVZ4.png";
const videoSrc = "/freelancer-free-lite/assets/images/";
const captionText = "PVZ4";

function showImage() {
    if (!imgHolder) return;
    imgHolder.innerHTML = `
            <img src="${originalImgSrc}" alt="${captionText}" class="clickable-img">
            <button type="button" class="project-play-btn" aria-label="Play Video">&#9658;</button>
        `;
    const btn = imgHolder.querySelector('.project-play-btn');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showVideo();
        });
    }
}

function showVideo() {
    if (!imgHolder) return;
    imgHolder.innerHTML = `
            <video controls autoplay style="width:100%; height:340px; object-fit:cover; border-radius:18px;" id="video1">
                <source src="${videoSrc}" type="video/mp4">
                مرورگر شما ویدیو را پشتیبانی نمی‌کند.
            </video>
        `;
    const video = document.getElementById('video1');
    if (video) {
        video.addEventListener('ended', showImage);
    }
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


