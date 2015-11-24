$(window).scroll(function() {
if ($(this).scrollTop() > 400){
  $('.bouton').addClass("animated fadeInUp");
}
else{
  $('.bouton').removeClass("animated fadeInUp");
}
});
