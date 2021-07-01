const body = document.querySelector('.body');

let headerWrap = document.querySelectorAll('.header-wrap');
let header = document.querySelectorAll('.header');

function fixedHeader(){

	for(let i = 0; i < header.length; i++){
		header[i].classList.remove('fix-header');
		if(window.scrollY >= header[i].offsetTop){
			header[i].classList.add('fix-header');
			headerWrap[i].style.height = header[i].offsetHeight + "px";
		}
	}

}

window.addEventListener('scroll', fixedHeader);









