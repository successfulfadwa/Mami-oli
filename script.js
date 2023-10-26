const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? '4vw' : '4vw',
    duration: 2,
    ease: 'elastic(1, .6)' });
/*phone*/ 
	if (window.innerWidth < 768) {
		gsap.to(items, {
		  width: item.clicked ?  '12vw' : 'vw',
		  duration: 2.5,
		  ease: 'elastic(1, .6)'
		});
	  }
	  
  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? '22vw' : '5.9vw',
    duration: 2.5,
    ease: 'elastic(1, .6)' });
	/*phone*/
	if (window.innerWidth < 768) {
		gsap.to(item, {
		  width: item.clicked ? '55vw' : '10vw',
		  duration: 2.5,
		  ease: 'elastic(1, .6)'
		});
	  }

};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});