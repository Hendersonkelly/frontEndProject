require("dotenv").config()
const apiKey = process.env.OPENAI_API_KEY

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);

async function wineFacts() {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'chardonnay',
        temperature: 0,
        max_tokens: 1000
    })
    console.log(response.data.choices[0].text);
}
wineFacts()