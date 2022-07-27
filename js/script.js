jQuery(document).ready(function(){

    $('#fullpage').fullpage({
        navigation: true
    });
    

    $('.ear').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
        dots:true
    });

    var filtered = false;

    $('.js-filter').on('click', function(){
      if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    });
    $('.tail').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
         dots:true
    });

    var filtered = false;

    $('.js-filter').on('click', function(){
      if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    });
    $('.play').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
         dots:true
    });

    var filtered = false;

    $('.js-filter').on('click', function(){
      if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    });

    
});

/* 
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
animateCSS('.cat1', 'animate__backInLeft')  */

