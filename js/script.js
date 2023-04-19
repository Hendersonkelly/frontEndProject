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
// 	.catch(err => console.error(err))
// 	const Open_AI_KEYS = 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


// async function checkWeather(city){
//     const response = await fetch();
//     let data = await response.json();
//     console.log(data);}

	async function generateText(prompt) {
		const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
		const apiKey = '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';
		const maxTokens = 100;
	  
		const response = await fetch(endpoint, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		  },
		  body: JSON.stringify({
			'prompt': prompt,
			'max_tokens': maxTokens
		  })
		});
	  
		const data = await response.json();
		 console.log(data.choices[0].text);
	  }
	  
	  
	  generateText('tell me about wine ');
	  
	  
	  
	  