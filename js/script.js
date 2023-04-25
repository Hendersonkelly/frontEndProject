// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '66e94678a5msh3e0d7fa4b3def0fp1474e8jsn7aa605df9683',
// 		'X-RapidAPI-Host': 'wine-pair.p.rapidapi.com'
// 	}
// };

// fetch('https://wine-pair.p.rapidapi.com/winesuggest.php?query=Pasta%20Bolognese', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     // This is for the icon-click on when it response to different size screen----------------------------------------

	const mobileToggler = document.querySelector('.mobile-toggler.d-lg-none');
	const modalTrigger = mobileToggler.querySelector('a[data-bs-toggle="modal"]');
	
	modalTrigger.addEventListener('click', (event) => {
	  event.preventDefault();
	  const modalId = modalTrigger.dataset.bsTarget;
	  const modalElement = document.querySelector(modalId);
	  const modal = new bootstrap.Modal(modalElement);
	  modal.show();
	});

