'use strict';
function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 8000);
}

typeWriter(typewr);

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
// let i = 0;
// var txt = "I am a web-developer from India.";
// const speed = 18;
      
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("typewr").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//  }
// }

// window.onload = typeWriter();