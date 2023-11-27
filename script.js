const burgerBtn = document.querySelector('.burger-icon')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav .nav-items')
const header = document.querySelector('.header')

const handleNav = () => {
	nav.classList.toggle('active')
	// header.classList.toggle('activeHeader')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)

document.querySelectorAll(".nav-items").forEach(n => n.addEventListener("click", () => {
	burgerBtn.classList.remove("active")
	nav.classList.remove("active")
	// header.classList.remove('activeHeader')
}))
