$(function () {
    
    $('#mask').on('click', function() {
        $('#header').removeClass('menu-open');
      });
    
    $('.navi a').on('click', function() {
        $('#header').removeClass('menu-open');
    });    

});

$('.pc-slick').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.mb-slick').slick();



class MobileMenu {
        constructor() {
            this.DOM = {};
            this.DOM.btn = document.querySelector('.toggle-btn');
            this.DOM.header = document.querySelector('#header');
            this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        }
    
        _toggle() {
            this.DOM.header.classList.toggle('menu-open');
        }
}
    
new MobileMenu();

document.addEventListener('DOMContentLoaded', function () {
    
    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    } 　
    
    const so = new ScrollObserver('.fade-in', cb);
});
