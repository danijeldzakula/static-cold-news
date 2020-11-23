(function(body) {
	document.addEventListener('DOMContentLoaded', function(e) {
		/* preloader */
	    body.classList.remove('loading');
	    body.classList.add('loaded');
	    /* end */


	    /* scroll restoration position top */
		/* option 2 */
		if (window.history.scrollRestoration) {
			if (window.history.scrollRestoration === 'auto') {
				history.scrollRestoration = 'manual';
			}
			window.addEventListener('unload', function(e) {
				return window.scrollTo(0, 0);
			});
		}    
		/* end */
	}, false);

})(document.body);

/*    	
const loaderWrap = document.getElementById('wrapper');
document.body.classList.add('js-loading');
window.addEventListener("load", showPage);

function showPage() {
  	document.body.classList.remove('js-loading');
  	loaderWrap.style.zIndex = "-1";
}    
*/