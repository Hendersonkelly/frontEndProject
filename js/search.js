

let search = document.querySelector('.input-group-text')
let input = document.querySelector('.form-control')

const fetch = async (params) => {
    let result = await fetch('api')
    let data = await result.json()

    
}
 let array = ["merlot", "malbec", "reisling"]
const createEl = (array) => {
    let pairedWines = document.querySelector('#pairedWines')
    for(i= 0; i< array.length; i++){
   let wineResult = document.createElement('ul')
    wineResult.innerHTML = array[i]
    pairedWines.append(wineResult)
    }
    
}

search.addEventListener('click',(e) => {
    
    if(input.value.length >0){
        console.log(input.value);
    }
    else{
        input.placeholder = "Whoops! Enter a food to search for: dish, ingredient, or cuisine"
    }
    // fetch()
    createEl(array)
    
})






input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter' && input.value.length >0){
        console.log(input.value)
    }

    else if(event.key === 'Enter' && input.value.length <= 0){
        input.placeholder = "Whoops! Enter a food to search for: dish, ingredient, or cuisine"
    }

    // fetch()
    createEl(array)
})
