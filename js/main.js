'use strict';

// ヒーロースライダー
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 最初のスライドを表示
showSlide(currentSlide);
// 5秒ごとにスライドを切り替え
setInterval(nextSlide, 5000);


// スクロール時のフェードインアニメーション
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 一度表示されたら監視を停止
            observer.unobserve(entry.target);
        }
    });
});

fadeInElements.forEach(el => {
    observer.observe(el);
});