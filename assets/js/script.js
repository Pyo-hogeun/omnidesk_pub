$(document).ready(function(){
  getSectionHeight();
  getOffset();
  console.log(sectionOffArr);
  setTimeout(() => {
    $('.main-visual').addClass('on');
    $('.sec-01 .catch-phrase').addClass('on');
  }, 1000);
});
let sectionOffArr = [];
// 각 섹션 offset top 값
function getSectionHeight(){
  $section = $('.action').each(function(i, e){
    let offset = parseInt($(this).offset().top);
    sectionOffArr.push(offset);
  });
}
// 스크롤값 
function getOffset(){
  let timer;
  let current = 0;
  const adjust = 500; //미세조정
  $(window).on('scroll', function(e){
    if(!timer){
      
      timer = setTimeout(() => {
        timer = null;
        let top = $(this).scrollTop();
        current = parseInt(top)
        $(sectionOffArr).each(function(i, e){
          if(i > 0){
            current > e - adjust && $('.action').eq(i).addClass('on');
          }
        })
      }, 300);
    }
  });

}
// 스크롤 시작 시 gnb 배경색추가
$(window).on('scroll', function(e){
  if($(this).scrollTop() > 100){
    $('.gnb').addClass('on')
  } else {
    $('.gnb').removeClass('on')
  }
});

// 스크롤 시 섹션에 trigger
