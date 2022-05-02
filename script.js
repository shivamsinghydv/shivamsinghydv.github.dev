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

// theme changer
const switchElement = document.querySelector('.switch')
      switchElement.addEventListener('click', () => {
        document.body.classList.toggle('dark')
      })