$(document).ready(function () {
        $("#my-calendar").zabuto_calendar();
        });


 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});
