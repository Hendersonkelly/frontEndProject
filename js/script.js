const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66e94678a5msh3e0d7fa4b3def0fp1474e8jsn7aa605df9683',
		'X-RapidAPI-Host': 'wine-pair.p.rapidapi.com'
	}
};

fetch('https://wine-pair.p.rapidapi.com/winesuggest.php?query=Pasta%20Bolognese', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    