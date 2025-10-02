const siteHeader = document.querySelector('.site-header')
const mobileButton = document.querySelector('.mobile-menu-toggle')
const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('button[name=close]')

mobileButton.addEventListener('click', () => {
	dialog.show()
})
closeButton.addEventListener('click', () => {
	dialog.close()
})

window.addEventListener('scroll', () => {
	const scrollY = window.scrollY
	if (scrollY > 100) {
		siteHeader.style.backgroundColor = '#000000ee'
	} else {
		siteHeader.style.backgroundColor = 'transparent'
	}
})
