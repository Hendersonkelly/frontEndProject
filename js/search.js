// DO NOT DELETE BELOW ===============================

// let search = document.querySelector('#input-group-lg-example')

// let input = document.querySelector('.form-control')
// let array = ["merlot", "malbec", "riesling"]
// const getWine = async (food) => {
//     let url = `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=20045f2079b44c89921d3eced6009bc5`
//     let result = await fetch(url)
//     let data = await result.json()
//     console.log(data);


// }

// const createEl = (array) => {
//     let pairedWines = document.querySelector('#pairedWines')

//     for(i= 0; i< array.length; i++){
//    let wineResult = document.createElement('ul')
//     wineResult.innerHTML = array[i]

//     pairedWines.append(wineResult)
// }

// }

// search.addEventListener('click', (e) => {
//     let food = input.value
//     if(input.value.length >0){
//         // getWine(food)
//         createEl(array)
//     }
//     else{
//         input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
//     }




// })






// input.addEventListener('keypress', (event) => {
//     if(event.key === "Enter" && input.value.length >0){
//         event.preventDefault
//         console.log(input.value)
//         createEl(array)
//     }

//     else if(event.key === 'Enter' && input.value.length <= 0){
//         input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
//     }

//     getWine(food)
// })
// DO NOT DELETE ABOVE ===============================

let search = document.querySelector('#search')


let input = document.querySelector('#input')

// let array = ["merlot", "malbec", "riesling"]
const getWine = async (food) => {
    let url = `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=20045f2079b44c89921d3eced6009bc5`
    let result = await fetch(url)
    let data = await result.json()
    console.log(data);
    const createEl = (array) => {

        let pairedWines = document.querySelector('#pairedWines')

        for (let i = 0; i < array.length; i++) {
            let wineResult = document.createElement('ul')
            wineResult.innerHTML = array[i]
            wineResult.setAttribute('id', 'ul')
            pairedWines.append(wineResult)
        }

    }
    createEl(data.pairedWines)
    console.log(pairedWines);
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
    if (event.key === "Enter" && input.value.length > 0) {
        event.preventDefault
        console.log(input.value)
        createEl(array)
        input.value = ""
    }

    else if (event.key === 'Enter' && input.value.length <= 0) {
        input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
    }

    getWine(food)
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


import { apiKey } from './key.js';
// console.log(apiKey);

let pairings = document.querySelectorAll('#pairedWines')
let varietal = document.querySelector('.modal-title')
let description = document.querySelector('.modal-body')
pairings.forEach(pairing => {
    pairing.addEventListener('click', async (e) => {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `describe ${e.target.innerHTML}`,
                temperature: 0,
                max_tokens: 300
            })
        })
        const data = await response.json()
        console.log(data);
        // let description = document.querySelector('#wineLookup')
        // description.innerHTML = data.choices[0].text;
        console.log(data.choices[0].text);
        varietal.textContent = e.target.innerHTML;
        description.textContent = data.choices[0].text;
    })

})






