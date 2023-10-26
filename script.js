const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  item.clicked = !item.clicked;
  gsap.to(item, {
	width: item.clicked ? '42vw' : '8vw',
	duration: 2.5,
	ease: 'elastic(1, .3)'
  });
  
  // Check for phone view
  if (window.innerWidth < 768) {
	gsap.to(items, {
	  width: item.clicked ? '5vw' : '5vw',
	  duration: 2.5,
	  ease: 'elastic(1, .3)'
	});
  }
  


	item.clicked = !item.clicked;
	gsap.to(item, {
	  width: item.clicked ? '22vw' : '8vw',
	  duration: 2.5,
	  ease: 'elastic(1, .3)'
	});
	
	// Check for phone view
	if (window.innerWidth < 768) {
	  gsap.to(item, {
		width: item.clicked ? '42vw' : '70vw',
		duration: 2.5,
		ease: 'elastic(1, .3)'
	  });
	}
	

};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});