$(document).ready(function(){
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  //Navbar fixed
  var headerSection = $('header'),
  headerSectionOffset = headerSection.height()/2,
  documentEl = $(document);
  
  documentEl.on('scroll', function(){
    if (documentEl.scrollTop() > headerSectionOffset){
      if ($(window).width() > 768) {
        $('nav').addClass('fixed-top');
        $('.back-top').removeClass('hidden');
      } else {
        $('.back-top').removeClass('hidden');
      }
    } else {
      $('nav').removeClass('fixed-top');
      $('.back-top').addClass('hidden');
    }
  });
  // SmoothScrolling
  // NAVBAR
  $('.navbar-right li').on('click',function(){
    var hash = $(this).children('a').attr('href');
    if ($(window).width() > 768) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 'slow');
    } if ($(window).width() > 414) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 'slow');
    } else {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 'slow');
    }        
  });
  //NAV LOGO
  $('.nav-logo').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
      }, 800);
  });
  //ICON TO TOP
  $('.back-top').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
      }, 800);
  });
})