// 메뉴 버튼(열림)을 눌렀을 때
$(document).ready(function() {
  $(".page-toggle").click(function() {
    $("nav").toggleClass("active");
    $(".page-toggle").toggleClass("change");
    $('body').css('overflow', 'hidden');
  });
});

// 메뉴 버튼(닫힘)을 눌렀을 때
function closeMenu(){
  $('nav').removeClass('active');
  $('.page-toggle').removeClass('change');
  $('body').css('overflow', 'auto');
}

// 메뉴 이와의 영역을 클릭하였을 때
$(document.body).click( function(e) {
     closeMenu();
});

// 메뉴 버튼(닫힘)을 클릭하였을 때 무시
$(".page-toggle").click( function(e) {
  e.stopPropagation();
});

// 다크모드 설정
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches
console.log(prefersDark);