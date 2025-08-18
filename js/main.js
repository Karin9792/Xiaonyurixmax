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
            // 一度表示されたら監視を停止させる
            observer.unobserve(entry.target);
        }
    });
});

fadeInElements.forEach(el => {
    observer.observe(el);
});

// 商品詳細ページの画像ギャラリー
const mainImage = document.querySelector('.main-image img');
const thumbs = document.querySelectorAll('.thumb-item');

// thumbsが存在する場合（＝商品詳細ページの場合）のみ実行
if (thumbs.length > 0) {
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // クリックされたサムネイルの画像パスをメイン画像に設定
            mainImage.src = this.src;

            // activeクラスの付け替え
            document.querySelector('.thumb-item.active').classList.remove('active');
            this.classList.add('active');
        });
    });
}