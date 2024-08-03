/*==================== ACCORDION INTERESTS ====================*/
const portfolio_abstract_toggle_btn = document.querySelectorAll('.portfolio_list__abstract_button'),
	  portfolio_abstract_close_btn = document.querySelectorAll('.portfolio_list__abstract_close')

function portfolio_abstract_toggle(){
	let itemClass = this.parentNode.className

	if(itemClass === 'portfolio_item_expander portfolio_list__close'){
		this.parentNode.className = 'portfolio_item_expander portfolio_list__open'
		return
	}

	if(itemClass === 'portfolio_item_expander portfolio_list__open'){
		this.parentNode.className = 'portfolio_item_expander portfolio_list__close'
	}
}

function portfolio_abstract_close(){
	let itemClass = this.parentNode.parentNode.className

	if(itemClass === 'portfolio_item_expander portfolio_list__open'){
		this.parentNode.parentNode.className = 'portfolio_item_expander portfolio_list__close'
	}

	if(window.scrollY > (this.parentNode.parentNode.getBoundingClientRect().bottom)) {
		const yOffset = -100; 
		const y = this.parentNode.parentNode.getBoundingClientRect().top + window.scrollY + yOffset;

		window.scrollTo({top: y});
	}
}

portfolio_abstract_toggle_btn.forEach((el) =>{
	el.addEventListener('click', portfolio_abstract_toggle)
})

portfolio_abstract_close_btn.forEach((el) =>{
	el.addEventListener('click', portfolio_abstract_close)
})
