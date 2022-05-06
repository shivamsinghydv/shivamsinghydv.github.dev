// register the service worker
if ('serviceWorker' in navigator){
  window.addEventListener('load',() =>{
    navigator.serviceWorker.register('/sw.js')
    .then(reg => {
      console.log('registered', reg)
    }).catch(err => {
      console.log('failed')
    })
  })
}

//typewriter
var i = 0;
var txt = 'I love coding. Scroll down to browse through my projects.';
var speed = 0.3;
var timout = (1/speed)*10
      
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewr").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, timout);
 }
}
window.onload = typeWriter();


// theme changer
const switchElement = document.querySelector('.switch')
      switchElement.addEventListener('click', () => {
        document.body.classList.toggle('dark')
      })