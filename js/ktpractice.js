// const { OpenAI, Configuration } = require('@openai/api;')

// const configuration = new Configuration({
//     apiKey: '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'
// })
// const openai = new OpenAIApi(configuration);

// async function wineFacts() {
//     const response = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: 'chardonnay',
//         temperature: 0,
//         max_tokens: 1000
//     })
//     const result = response.data.choices[0].text;
//     document.getElementById('wineLookup').innerHTML = result;
// }
// wineFacts();

import { apiKey } from './key.js';
console.log(apiKey);

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: 'describe chardonnay',
            temperature: 0,
            max_tokens: 300
        })
    })
    const data = await response.json()
    console.log(data.choices[0].text);
    let description = document.querySelector('#wineLookup')
    description.innerHTML = data.choices[0].text;
}

fetchData()

// import { apiKey } from './key.js';
// console.log(apiKey);
// import OpenAI from '@openai/api';

// const openai = new OpenAI({ api_key: apiKey });
// openai.completions.create({
//     engine: 'text-davinci-003',
//     prompt: 'describe chardonnay',
//     temperature: 0,
//     max_tokens: 300
// }).then(console.log)