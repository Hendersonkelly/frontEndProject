require("dotenv").config()
const apiKey = process.env.OPENAI_API_KEY
// console.log(apiKey);

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: apiKey
});
// console.log(process.env.OPENAI_API_KEY);
// console.log('==========================================');
// console.log(configuration);
const openai = new OpenAIApi(configuration);



async function start() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "cabernet sauvignon wine",
        temperature: 0.2,
        max_tokens: 1000
    })

    console.log(response.data.choices[0].text);
}
start()