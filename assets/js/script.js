$(document).ready(function(){
  console.log('연결');
  getSectionHeight();
  getOffset();
  console.log(sectionOffArr);
});
let sectionOffArr = [];
function getSectionHeight(){
  $section = $('.section').each(function(i, e){
    let offset = parseInt($(this).offset().top);
    sectionOffArr.push(offset);
  });
}
function getOffset(){
  let timer;
  $(window).on('scroll', function(e){
    if(!timer){
      timer = setTimeout(() => {
        timer = null;
        let top = $(this).scrollTop();
        console.log('scroll', parseInt(top));
      }, 300);
    }
  })
}