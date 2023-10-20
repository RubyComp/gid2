document.addEventListener('DOMContentLoaded', function () {
	console.log('Scripts')

	////////////////////////////////
	// Accordion

	// const sections = document.querySelectorAll('.accordion__section')

	// if (sections) {

	// 	if (sections.length > 0) {
	// 		sections[0].classList.add('active')
	// 		const firstAnswer = sections[0].querySelector('.accordion__answer')
	// 		firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px'
	// 	}

	// 	function collapseAllExceptActive(activeSection) {
	// 		sections.forEach((section) => {
	// 				if (section !== activeSection) {
	// 					section.classList.remove('active')
	// 					section.querySelector('.accordion__answer').style.maxHeight = null
	// 				}
	// 		})
	// 	}

	// 	function toggleAccordion() {
	// 		const answer = this.nextElementSibling
	// 		const isActive = this.parentNode.classList.contains('active')
		
	// 		collapseAllExceptActive(this.parentNode)
		
	// 		if (isActive) {
	// 				this.parentNode.classList.remove('active')
	// 				answer.style.maxHeight = null
	// 		} else {
	// 				this.parentNode.classList.add('active')
	// 				answer.style.maxHeight = answer.scrollHeight + 'px'
	// 		}
	// 	}

	// 	sections.forEach((section) => {
	// 		const question = section.querySelector('.accordion__question')
	// 		question.addEventListener('click', toggleAccordion)
	// 	})
	// }
	

})
