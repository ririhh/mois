/* 메뉴 */
$(function(){
  $('.menu_l>li').hover(function(){
      $(this).find('.all_menu').stop().slideDown(500); 
  },function(){
      $(this).find('.all_menu').stop().slideUp(500); 
  });
});