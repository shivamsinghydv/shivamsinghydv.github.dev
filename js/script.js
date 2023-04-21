// register the service worker
if ('serviceWorker' in navigator){
  window.addEventListener('load',() =>{
    navigator.serviceWorker.register('/js/sw.js')
    .then(reg => {
      console.log('registered', reg)
    }).catch(err => {
      console.log('failed')
    })
  })
}

//typewriter
let i = 0;
var txt = "I am a web-developer from India.";
const speed = 18;
      
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewr").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
 }console.log('hello')
}

window.onload = typeWriter();

console.log('hw')

