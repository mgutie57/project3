function randomLoad(){

    let cocktailName = $('#cocktail').val();
    console.log(cocktailName);
    var cocktail = encodeURIComponent(cocktailName);

    $.ajax({
        type: 'GET',
        datatype: 'json',
        timeout:2000,
        crossDomain: true,
    
        url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,

        
        success: function(data, status){
            if (!data.drinks || data.drinks.length <= 0) {
                $( "#data" ).html('No drinks found!!');
                return;
            }

            // Get the first drink.
            var drink = data.drinks[0];
            names(drink);
            ingredients(drink);
        },
        error: function (errorMessage) {
            console.error(errorMessage);
        }
    });
}


function names(drink){    
    console.log(drink);
    let index = 1;
    var text = '';
    
    text += `<h2>${drink.strDrink}. This drink is ${drink.strAlcoholic}. </h2><br/>`;
       $( "#names" ).html(text);     
    }


    function ingredients(drink){    
        //console.log(drink);
        let index = 1;
        let ingredientArray = [];
        
        while (drink['strIngredient' + index]) {
            ingredientArray.push({name: drink['strIngredient' + index]});
            index++;
        }
        var text = '';
        text += '<b>Ingredients:</b></br>';
            ingredientArray.forEach((ingredient) => { 
            text += `<li> ${ingredient.name}</li>`;
            });
    
        $( "#ingredients" ).html(text);     
    }

    $(document).ready(function () { 
        $(".animation").addClass("animated shake");
      });