$(document).ready(function(){

    $("a").on('click', function(event) {
  

      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });

  var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml9 .letter',
  scale: [0, 1],
  duration: 1500,
  elasticity: 600,
  delay: (el, i) => 45 * (i+1)
}).add({
  targets: '.ml9',
  opacity: 0,
  duration: 500,
  easing: "easeOutExpo",
  delay: 500
});


window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}