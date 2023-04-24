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










let pairedWines = document.querySelectorAll('#pairedWines')
let varietal = document.querySelector('.modal-title')
let content = document.querySelector('#modal-body')
let recommendation1 = document.querySelector('#recommendation1')
let recommendation2 = document.querySelector('#recommendation2')
pairedWines.forEach(pairedWines => {
    pairedWines.addEventListener('click', async (e) => {
        console.log(e.target.innerHTML);
        let string = e.target.innerHTML
        let description = ""
        for (let i=1; i< string.length; i++){
            description += string[i]        }
            console.log(description);
        const response = await fetch(`https://api.spoonacular.com/food/wine/description?wine=${description}&apiKey=20045f2079b44c89921d3eced6009bc5`, {
        
        })
        const data = await response.json()
        
        varietal.textContent = description;
      
        content.textContent = data.wineDescription;
        const response2 = await fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=${description} &number=2&apiKey=20045f2079b44c89921d3eced6009bc5`, {
        
        })
        const data2 = await response2.json()
        
        recommendation1.textContent = `Recommendation: ${data2.recommendedWines[0].title} 
        Description: ${data2.recommendedWines[0].description} 
        Price: ${data2.recommendedWines[0].price}


        ` 
        recommendation2.textContent = `Recommendation: ${data2.recommendedWines[1].title} 
        Description: ${data2.recommendedWines[1].description} 
        Price: ${data2.recommendedWines[1].price}
        `
        
        
       





        // recommendation2.textContent = data2.recommendedWines[1]



    })

})


