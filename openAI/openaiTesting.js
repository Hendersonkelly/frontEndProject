const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: 'org-Nueyt0AmNfFmsza4ECahIScD',
    apiKey: process.env.OPENAI_API_KEY,
});
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