$(document).ready(function(){
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $('.info-viewer').on('click', function(e){
    if ($('.info').is(":hidden")){
      $('.info').stop(true, true).slideDown();
    } else {
      $('.info').stop(true, true).slideUp();
    }    
  });
})