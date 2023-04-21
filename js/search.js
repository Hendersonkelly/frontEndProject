

let search = document.querySelector('#input-group-lg-example')

let input = document.querySelector('.form-control')
let food = input.value
const fetch = async (food) => {
    let url = "https://api.spoonacular.com/"+food+"/wine/pairing?apiKey=20045f2079b44c89921d3eced6009bc5"
    let result = await fetch(url)
    let data = await result.json()
    console.log(data);

    
}
 
const createEl = (array) => {
    let pairedWines = document.querySelector('#pairedWines')
    for(i= 0; i< array.length; i++){
   let wineResult = document.createElement('ul')
    wineResult.innerHTML = array[i]
    
    pairedWines.append(wineResult)
}
    
}

search.addEventListener('click', (e) => {
    
    if(input.value.length >0){
        console.log(input.value);
        fetch(food)
    }
    else{
        input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
    }
    
   
    
    
})






// input.addEventListener('keypress', (event) => {
//     if(event.key === 'Enter' && input.value.length >0){
//         console.log(input.value)
//     }

//     else if(event.key === 'Enter' && input.value.length <= 0){
//         input.placeholder = "Whoops! Enter a dish, ingredient, or cuisine"
//     }

//     // fetch()
//     createEl(wine)
// })
