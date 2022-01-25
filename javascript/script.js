const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation +180)
})

document.querySelector('.enter-button').addEventListener('click', () =>{
    window.location.href = ('./main.html')
})

const container = document.querySelector('.container')
document.querySelector('.theme-toggle-button').addEventListener('click', () =>{
    document.body.classList.toggle('dark')
})
document.querySelector('.enter-button').addEventListener('click', () =>{
    window.location.href = ('./index.html')
})