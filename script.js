const front = document.querySelector('.devin')
const text = document.querySelector('.text')
const box = document.querySelector('#single_div')

window.addEventListener('mousemove', function(e){
  var halfW = window.innerWidth/2
  var halfH = window.innerHeight/2
  var x = e.clientX;
  var y = e.clientY
  var rx = x < halfW ? -(1-(x/halfW)) : (1-(halfW/x))*2;
  var ry = y < halfH ? (1-(y/halfH)) : -(1-(halfH/y))*2;

  box.style.transform = "rotateY("+rx*20+"deg) rotateX("+ry*20+"deg)"
  front.style.transform = "rotateY("+rx*25+"deg) rotateX("+ry*25+"deg)"
  text.style.transform = "rotateY("+rx*15+"deg) rotateX("+ry*15+"deg)"
})

function goToYouTube() {  window.open('https://www.youtube.com/c/Sélémusium', '_blank');
}