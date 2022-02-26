// menu hamburger//
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//swap themes//
const container = document.querySelector('.container')
document.querySelector('.theme-toggle-button').addEventListener('click', () =>{
    document.body.classList.toggle('dark')
})