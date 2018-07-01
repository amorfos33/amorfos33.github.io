$(".button").click(function(){
    $("html, body").animate({scrollTop: $(".mainTrump").height()+ 1000 },"slow");
    
    return false;});
var scrollElem = document.getElementById('scroll');

    var scrollSourceBottom = scrollElem.getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
      if (scrollElem.classList.contains('fixed') && window.pageYOffset < scrollSourceBottom) {
        scrollElem.classList.remove('fixed');
      } else if (window.pageYOffset > scrollSourceBottom) {
        scrollElem.classList.add('fixed');
      }
    };
$(function(){
    $.getJSON('db.json', function(data) {
$.each(data,function (key,value) {
    var test=
    
    '<div class="imgTrump" style="background-image: url(../img/'+value.img+');"></div>'+
    '<div class="container">'+
        '<strong class="redDate">'+
         '<b>'+value.date+'</p>'+
    '</strong>'+
    '<div class="contentBlock">'+
        '<h2>'+value.title+'</h2>'+
        '<p>'+value.description+'</p>'+
        '<video width="608" height="404" src="./img/'+value.date+'.mp4" controls="controls" poster="./img/'+value.img+'"></video>'+
    '</div>'+
    '</div>'
        

    $('#mainTrump').append(test);
})

    });
});