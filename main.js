var form = document.querySelector('form')
var meal = []
var ingredients = []
document.querySelector('.text').style.display = 'none'
document.querySelector('.ingredients').style.display = 'none'

form.addEventListener('submit', function(e){
    e.preventDefault();

    document.querySelector('.text').style.display = 'block'
    document.querySelector('.ingredients').style.display = 'block'

    const option = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, option)

    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.meals[0])

        meal[0] = data.meals[0].strMeal
        meal[1] = data.meals[0].strMealThumb
        meal[2] = data.meals[0].strInstructions
        meal[3] = data.meals[0].strYoutube
        ingredients[0] = data.meals[0].strIngredient1 +' '+ data.meals[0].strMeasure1 
        ingredients[1] = data.meals[0].strIngredient2 +' '+ data.meals[0].strMeasure2 
        ingredients[2] = data.meals[0].strIngredient3 +' '+ data.meals[0].strMeasure3 
        ingredients[3] = data.meals[0].strIngredient4 +' '+ data.meals[0].strMeasure4 
        ingredients[4] = data.meals[0].strIngredient5 +' '+ data.meals[0].strMeasure5 
        ingredients[5] = data.meals[0].strIngredient6 +' '+ data.meals[0].strMeasure6 
        ingredients[6] = data.meals[0].strIngredient7 +' '+ data.meals[0].strMeasure7 
        ingredients[7] = data.meals[0].strIngredient8 +' '+ data.meals[0].strMeasure8 
        ingredients[8] = data.meals[0].strIngredient9 +' '+ data.meals[0].strMeasure9 
        ingredients[9] = data.meals[0].strIngredient10 +' '+ data.meals[0].strMeasure10 
        ingredients[10] = data.meals[0].strIngredient11 +' '+ data.meals[0].strMeasure11 
        ingredients[11] = data.meals[0].strIngredient12 +' '+ data.meals[0].strMeasure12 
        ingredients[12] = data.meals[0].strIngredient13 +' '+ data.meals[0].strMeasure13 
        ingredients[13] = data.meals[0].strIngredient14 +' '+ data.meals[0].strMeasure14 
        ingredients[14] = data.meals[0].strIngredient15 +' '+ data.meals[0].strMeasure15 
        ingredients[15] = data.meals[0].strIngredient16 +' '+ data.meals[0].strMeasure16 
        ingredients[16] = data.meals[0].strIngredient17 +' '+ data.meals[0].strMeasure17 
        ingredients[17] = data.meals[0].strIngredient18 +' '+ data.meals[0].strMeasure18 
        ingredients[18] = data.meals[0].strIngredient19 +' '+ data.meals[0].strMeasure19 
        ingredients[19] = data.meals[0].strIngredient20 +' '+ data.meals[0].strMeasure20 
        


        document.querySelector(`#name`).innerHTML = meal[0]
        document.querySelector('#image').innerHTML = "<img src='" + meal[1] +"' id='image' class='image col-sm-6 thumbnail' '>"
        document.querySelector(`#description`).innerHTML = meal[2]
        document.querySelector('#ingredient1').innerHTML += ingredients[0]
        document.querySelector('#ingredient2').innerHTML += ingredients[1] 
        document.querySelector('#ingredient3').innerHTML += ingredients[2] 
        document.querySelector('#ingredient4').innerHTML += ingredients[3]
        document.querySelector('#ingredient5').innerHTML += ingredients[4]
        document.querySelector('#ingredient6').innerHTML += ingredients[5]
        document.querySelector('#ingredient7').innerHTML += ingredients[6]
        document.querySelector('#ingredient8').innerHTML += ingredients[7]
        document.querySelector('#ingredient9').innerHTML += ingredients[8]
        document.querySelector('#ingredient10').innerHTML += ingredients[9]
        document.querySelector('#ingredient11').innerHTML += ingredients[10]
        document.querySelector('#ingredient13').innerHTML += ingredients[11]
        document.querySelector('#ingredient13').innerHTML += ingredients[12]
        document.querySelector('#ingredient14').innerHTML += ingredients[13]
        document.querySelector('#ingredient15').innerHTML += ingredients[14]
        document.querySelector('#ingredient16').innerHTML += ingredients[15]
        document.querySelector('#ingredient17').innerHTML += ingredients[16]
        document.querySelector('#ingredient18').innerHTML += ingredients[17]
        document.querySelector('#ingredient19').innerHTML += ingredients[18]
        document.querySelector('#ingredient20').innerHTML += ingredients[19]

        
    })
    .catch(function(e){
        console.log('Erro: '+ e,message)
    }) 

})


