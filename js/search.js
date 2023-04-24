import { apiKey } from './key.js';
// console.log(apiKey);

let search = document.querySelector('#search')
let input = document.querySelector('#input')
var pairings = []
async function getWine() {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `suggest three wine pairings in an un-numbered list ${input.value} without descriptions`,
            temperature: 0,
            max_tokens: 500
        })
    })
    const data = await response.json()
    pairings = data.choices[0].text;
    console.log(pairings);
    let pairingsArr = pairings.split("\n");
    console.log(pairingsArr);
    console.log(pairingsArr[2]);
    console.log(pairingsArr.length);
    // console.log(pairings);

    let pairedWines = document.querySelector('#pairedWines')
    let wineResultList = document.createElement('ul')
    pairedWines.append(wineResultList)
    for (let i = 2; i < 5; i++) {
        let wineResult = document.createElement('li')
        wineResult.innerText = pairingsArr[i]
        console.log(wineResult);
        wineResultList.appendChild(wineResult)
    }
    // for (let i = 2; i < pairings.length; i++) {
    //     console.log(pairings);
    //     let wineResult = document.createElement('ul')
    //     wineResult.setAttribute('id', 'ul')
    //     wineResult.textContent = pairings[i];
    //     console.log(wineResult);
    //     pairedWines.append(wineResult)
    // }

    // const createEl = (array) => {
    //     let pairedWines = document.querySelector('#pairedWines')
    //     console.log(data.choices[0].text);
    //     for (let i = 0; i < pairings.length; i++) {
    //         console.log(pairings);
    //         let wineResult = document.createElement('ul')
    //         wineResult.setAttribute('id', 'ul')
    //         wineResult.textContent = pairings[i];
    //         console.log(wineResult);
    //         pairedWines.append(wineResult)
    //     }
    //     createEl(pairedWines)
    //     console.log(pairedWines);
    // }

}

const clear = () => {
    let pairedWines = document.querySelector('#pairedWines')
    let wineList = document.querySelectorAll('#ul')
    while (pairedWines.firstChild) {
        pairedWines.removeChild(pairedWines.firstChild)
    }
}



search.addEventListener('click', (e) => {
    clear()
    let food = input.value
    console.log(food);

    if (input.value.length > 0) {
        getWine(food)

        input.value = ""

    }
    else {
        input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
    }

})


input.addEventListener('keypress', (event) => {
    clear()
    let food = input.value
    if (event.key === "Enter" && input.value.length > 0) {
        event.preventDefault

        getWine(food)

        input.value = ""
    }

    else if (event.key === 'Enter' && input.value.length <= 0) {
        input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
    }

})


