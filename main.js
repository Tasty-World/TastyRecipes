// Class
function makeRecipes(name) {
    return {
        name,
        listrecipes: [],
        factoryrecipes: factoryrecipes,
        displayrecipes: displayrecipes,
        deleterecipes: deleterecipes,
        //  serachreceips: serachreceips,
        // // addrecipes: addrecipes,


    }
}

// function id
function generateID() {
    var count = 0;
    return function () {
        return count++;
    };
}
// store the function id in a variable:
var id = generateID()



// factory function:
function factoryrecipes(name, country, flagcontry, category, ingredient, images, time, description) {
    var data = {
        id: id(),
        name,
        country,
        flagcontry,
        category,
        ingredient,
        images,
        time,
        description,

    }
    this.listrecipes.push(data)
    return data
}



var tastyWorld = makeRecipes("Recipes")
// creation the recipes: 
tastyWorld.factoryrecipes('Couscous', 'Tunisia', ['https://img.freepik.com/free-photo/realistic-tunisia-flag-background_125540-2768.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=sph'], 'Savory', ['Semolina', 'Tomato', 'Beef', 'Vegetables'], ['https://i0.wp.com/lapresse.tn/wp-content/uploads/2021/07/couscous-tunisien.jpg?fit=850%2C491&ssl=1'], 40, `Cook the meat for another 15 minutes and recheck on the remaining vegetables. Remove any cooked vegetables, add the chickpeas and cook the meat for another 15 minutes with the lid on. Once the meat is cooked, separate the meat and chickpeas from the chicken broth and set them aside for assembling. 

COOKING THE COUSCOUS: 
Cooking the couscous depends on the couscous brand you purchased. Read the package instructions to know how much liquid is needed to steam the couscous. Then, add meat broth equal to the liquid measurement written on the package in a cooking pot and bring it to a boil. Then, turn the heat off and add the couscous. Stir the couscous and immediately cover the cooking pot. Allow the couscous to cook for 10 minutes without disturbing it. Then fluff the couscous using a fork to separate the granules. 

For example, the couscous I bought indicated that for every 100 grams of couscous, I need to add 75 ml of liquid. I’m using 500 grams of couscous, so I added 375 ml of meat broth and bought it to boil. Then I turned the heat off and added the couscous. I stirred the couscous and covered the cooking pot. I waited 10 minutes before removing the lid and fluffing the couscous"
`)
tastyWorld.factoryrecipes('Bambalouni', 'Tunisia', ['https://img.freepik.com/free-photo/realistic-tunisia-flag-background_125540-2768.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=sph'], 'Sweet', ['Flour', 'Sugar', 'Water', 'Eggs'], ['https://cuisine.nessma.tv/uploads/1/2019-06/921a9ce794277064aae8a219604bce02.jpg'], 40)
tastyWorld.factoryrecipes('Tajine', 'Marocco', ['https://i.pinimg.com/originals/85/08/e5/8508e5c2a620e6fbdddb9153b18d130a.jpg'], 'Savory', ['Beef', 'Vegetable', 'Pimento', 'Oil'], ['https://chatelaine.com/wp-content/uploads/2020/02/Tagine-istock-feature-image-810x608.jpg'], 95)
tastyWorld.factoryrecipes('Corne de gazelle', 'Marocco', ['https://i.pinimg.com/originals/85/08/e5/8508e5c2a620e6fbdddb9153b18d130a.jpg'], 'Sweet', ['Almonds', 'Sugar', 'Butter', 'Flour'], ['https://www.willflyforfood.net/wp-content/uploads/2021/09/moroccan-food-kaab-el-ghzal.jpg'], 60)
tastyWorld.factoryrecipes('Raclette', 'France', ['https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2924/4925/francematerial__52340.1601393966.jpg?c=2'], 'Savory', ['Beef', 'Cheese', 'Potato', 'Onion'], ['https://snippetsofparis.com/wp-content/uploads/2020/10/raclette-1.jpg'], 35)
tastyWorld.factoryrecipes('Crepe', 'France', ['https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2924/4925/francematerial__52340.1601393966.jpg?c=2'], 'Sweet', ['Flour', 'Eggs', 'Milk', 'Butter'], ['https://hips.hearstapps.com/hmg-prod/images/delish-basic-crepes-horizontal-1545245797.jpg'], 38)
tastyWorld.factoryrecipes('Pizza', 'Italy', ['https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2981/4927/italymaterial__41896.1625830280.jpg?c=2'], 'Savory', ['Flour', 'Tomato', 'Cheese', 'Oil'], ['https://www.saporinostri.it/wp-content/uploads/2020/10/le-origini-della-pizza-napoletana-e1601990439881-1024x604.jpg'], 45)
tastyWorld.factoryrecipes('Tiramisu', 'Italy', ['https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2981/4927/italymaterial__41896.1625830280.jpg?c=2'], 'Sweet', ['Cacoa Powder', 'Dark Choclate', 'Savoiadri', 'Mascarpone'], ['https://www.marcellinaincucina.com/wp-content/uploads/2019/11/Tiramisu-blog-1.jpg'], 46)
tastyWorld.factoryrecipes('Pita', 'Greek', ['https://www.flagsonline.it/uploads/2016-9-2/1200-0/grecia.jpg'], 'Savory', ['Yogurt', 'Onion', 'Oil', 'Citron'], ['https://decouvrirlagrece.com/wp-content/uploads/2013/01/pitogyro.jpg'], 28)
tastyWorld.factoryrecipes('Galaktoboureko', 'Greek', ['https://www.flagsonline.it/uploads/2016-9-2/1200-0/grecia.jpg'], 'Sweet', ['Flour', 'Milk', 'Sheets Phyllo Dough', 'Butter'], ['https://mehr-genuss.de/wp-content/uploads/Galaktoboureko-Rezept.jpg'], 90)
tastyWorld.factoryrecipes('Shish Taouk', 'Lebanon', ['https://www.flagsonline.it/uploads/2016-6-6/1200-0/lebanon.jpg'], 'Savory', ['Chiken', 'Yogurt', 'Lemon', 'Garlic'], ['https://healthyfitnessmeals.com/wp-content/uploads/2020/12/CHICKEN-SISH-TAWOOK-6.jpg'], 35)
tastyWorld.factoryrecipes('Kunafa', 'Lebanon', ['https://www.flagsonline.it/uploads/2016-6-6/1200-0/lebanon.jpg'], 'Sweet', ['Kunafa dough', 'Milk', 'Heavy Cream', 'Butter'], ['https://www.gofooddy.com/wp-content/uploads/2019/06/kunafa-recipe.jpg'], 50)
tastyWorld.factoryrecipes('Tacos', 'Mexico', ['https://images-cdn.ubuy.co.in/63638e19676d63515105de05-mexico-flag-3x5-foot-mexican-national.jpg'], 'Savory', ['Beef', 'Cheddar', 'Chuncky Salsa', 'Taco Sheels'], ['https://collectionepicerie.com/upload/providers/taco-nouveau-slider.jpg'], 55)
tastyWorld.factoryrecipes('Churros', 'Mexico', ['https://images-cdn.ubuy.co.in/63638e19676d63515105de05-mexico-flag-3x5-foot-mexican-national.jpg'], 'Sweet', ['Water', 'Flour', 'Sugar', 'Vanilla', 'Butter'], ['https://thegirlinspired.com/wp-content/uploads/2023/02/Churro-Recipe-19.jpg'], 30)
tastyWorld.factoryrecipes('Hamburger', 'America', ['https://img.freepik.com/photos-gratuite/drapeau-etats-unis-amerique_1401-253.jpg?w=2000'], 'Savory', ['Beef', 'Cheddar', 'Mustard', 'Hamburger Buns'], ['https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2.jpg'], 30)
tastyWorld.factoryrecipes('Donuts', 'America', ['https://img.freepik.com/photos-gratuite/drapeau-etats-unis-amerique_1401-253.jpg?w=2000'], 'Sweet', ['Flour', 'Butter', 'Eggs', 'Salt & Vanilla'], ['https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg'], 90)
tastyWorld.factoryrecipes('Sushi', 'Japan', ['https://t3.ftcdn.net/jpg/00/62/19/54/360_F_62195416_wfzM4Baz70OjEU54EhsCpvuQWlIhukPg.jpg'], 'Savory', ['Avocado', 'White Rice', 'Crabmeat', 'Seaweed Sheets'], ['https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg'], 40)
tastyWorld.factoryrecipes('Fluffy Jiggly', 'Japan', ['https://t3.ftcdn.net/jpg/00/62/19/54/360_F_62195416_wfzM4Baz70OjEU54EhsCpvuQWlIhukPg.jpg'], 'Sweet', ['Milk', 'Oz Cream Cheese', 'Butter', 'Eggs'], ['https://cloudinary-cdn.whisk.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_630,w_1200/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1688245453/recipe/ea6f18f107c4ab1e8c966fbfa87c0b07.jpg'], 95)
tastyWorld.factoryrecipes('Lahmacun', 'Türkiye', ['https://img.freepik.com/photos-premium/drapeau-turquie-dans-vent-agitant-drapeau-turc-colore_526955-291.jpg?size=626&ext=jpg'], 'Savory', ['Beef', 'Semolina', 'Onion', 'Tomato'], ['https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Lahmacun-1-c4dc646.jpg?resize=768,574'], 75)
tastyWorld.factoryrecipes('Balava', 'Türkiye', ['https://img.freepik.com/photos-premium/drapeau-turquie-dans-vent-agitant-drapeau-turc-colore_526955-291.jpg?size=626&ext=jpg'], 'Sweet', ['Almond', 'Pâte Phyllo', 'Butter', 'Honey'], ['https://img-3.journaldesfemmes.fr/7sgqspLdOhU70LwWzyasHvSjLxM=/800x600/smart/2145f3d833ff42f98aecf5e967f6f362/recipe-jdf/10027185.jpg'], 92)
tastyWorld.factoryrecipes('Poutine', 'Canada', ['https://i.pinimg.com/originals/d6/65/2b/d6652b338cb5b0e77b67b97f0fad0d48.jpg'], 'Savory', ['Potatoes', 'Cheese Curds', 'Gravy'], ['https://img.cuisineaz.com/660x660/2014/04/07/i91898-poutine.webp'], 45);
tastyWorld.factoryrecipes('Paella', 'Spain', ['https://media.istockphoto.com/id/491607801/photo/flag-of-spain.jpg?s=612x612&w=0&k=20&c=zi2wljrO2447gvbto81vBCciocoT8KFbHhHThFqcBBs='], 'Savory', ['Rice', 'Chicken', 'Seafood', 'Vegetables'], ['https://assets.afcdn.com/recipe/20190827/96838_w2000h1333c1cx2100cy1400cxb4200cyb2800.webp'], 50);
tastyWorld.factoryrecipes('Curry', 'India', ['https://media.istockphoto.com/id/1409466493/vector/india-flag-design-waving-indian-flag-made-of-satin-or-silk-fabric-vector-illustration.jpg?s=612x612&w=0&k=20&c=rTLIf6BF0WRnzCFHQYjJSjknue725U7gcBd_f94W3fM='], 'Savory', ['Meat', 'Spices', 'Tomatoes', 'Onions'], ['https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1152/hd-aspect-1501791674-delish-chicken-curry-horizontal.jpg?resize=1200:*'], 45);
tastyWorld.factoryrecipes('Samosa', 'India', ['https://media.istockphoto.com/id/1409466493/vector/india-flag-design-waving-indian-flag-made-of-satin-or-silk-fabric-vector-illustration.jpg?s=612x612&w=0&k=20&c=rTLIf6BF0WRnzCFHQYjJSjknue725U7gcBd_f94W3fM='], 'Savory', ['Potatoes', 'Peas', 'Spices', 'Pastry Dough'], ['https://blog.pureindianfoods.com/wp-content/uploads/2018/10/indian-samosas.jpg'], 40);
tastyWorld.factoryrecipes('Schnitzel', 'Austria', ['https://static.vecteezy.com/system/resources/previews/007/324/114/non_2x/austria-national-flag-design-austria-flag-3d-waving-background-illustration-free-vector.jpg'], 'Savory', ['Veal', 'Breadcrumbs', 'Egg', 'Flour'], ['https://i0.wp.com/www.alltherooms.com/blog/wp-content/uploads/2019/01/Feature-9-Places-for-the-Best-Schnitzel-in-Vienna-By-Brent-Hofacker.jpg?fit=1000%2C667&ssl=1'], 35);
tastyWorld.factoryrecipes('Ceviche', 'Peru', ['https://upload.wikimedia.org/wikipedia/commons/5/5f/Bandera_Flag_Per%C3%BA_00a.png'], 'Savory', ['Fish', 'Lime Juice', 'Onion', 'Cilantro'], ['https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg'], 30);
tastyWorld.factoryrecipes('Goulash', 'Hungary', ['https://t4.ftcdn.net/jpg/00/62/18/69/360_F_62186912_auBGPuvWCYqinSYKnDqg2yNwzPJ0wVpN.jpg'], 'Savory', ['Beef', 'Bell Peppers', 'Paprika', 'Onions'], ['https://img.taste.com.au/2yyKXosQ/taste/2016/11/goulash-soup-75934-1.jpeg'], 50);
tastyWorld.factoryrecipes('Kimchi', 'South Korea', ['https://img.freepik.com/premium-vector/vector-south-korea-flag-waving-realistic-flowing-flags_378399-66.jpg'], 'Savory', ['Cabbage', 'Radish', 'Chili Paste', 'Garlic'], ['https://cicili.tv/wp-content/uploads/IMG_7305.jpg'], 40);


// Display & Append HTML
function display(tasty) {
    var id = tasty.id;
    $("#recipes").append(`
      <div class = tasty id = tasty${id}>
        <h2 class = name id = name${id}>${tasty.name}</h2>
        <p class = country id = country${id}>${tasty.country}</p>
        <p class = category id = category${id}>${tasty.category}</p>
        <p  class = ingredient id = ingredient${id}> Ingredient <br>${tasty.ingredient}</p>
        <img class = flagcountry id = ${id} src=${tasty.flagcontry[0]} alt = ${tasty.flagcontry[1]} />
        <img class = image id = image${id} src=${tasty.images[0]} alt = ${tasty.images[1]} />
        <p class = time id = time${id}> <i class="fa-solid fa-clock" style="color: #e08b29;"></i> ${tasty.time} min </p>
        <button class= "delete" id ="btn${id}" "> Delete </button>
      </div>
      `);
    $(`#btn${id}`).on('click', function () {
        tastyWorld.deleterecipes(id)
    })
}


// Display
function displayrecipes() {
    $("#recipes").empty();
    for (var i = 0; i < this.listrecipes.length; i++) {
        display(this.listrecipes[i]);
    };
}

tastyWorld.displayrecipes()


// deleteRecipes
function deleterecipes(id) {
    tastyWorld.listrecipes = tastyWorld.listrecipes.filter(function (recipe) {
        return recipe.id !== id;
    });
    tastyWorld.displayrecipes()
}



// SearchByName
$("#find").on("click", function () {
    var value = $("#search").val();
    var filtered = tastyWorld.listrecipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(value.toLowerCase()) || recipe.country.toLowerCase().includes(value.toLowerCase())
    });
    $("#recipes").empty();
    filtered.forEach(function (recipe) {
        display(recipe);
    });
});

// hideRecipes
$('#addRecipe').hide()

// btn Show To Add
$('#show').on("click", function () {
    if ($('#addRecipe').is(":visible")) {
        $('#addRecipe').hide()
    } else {
        $('#addRecipe').show()
    }

})
// btn to SubmitAdd And Hide
$('#submit').on("click", function () {
    var nameInput = $('#name')
    var countryInput = $('#country')
    var flagcontryInput = $('#flagCountry')
    var categoryInput = $('#category')
    var ingrInput = $('#ingredients')
    var imagesInput = $('#images')
    var timeInput = $('#time')
    var name = nameInput.val()
    var country = countryInput.val()
    var flagCountry = [flagcontryInput.val()]
    var category = categoryInput.val()
    var ingredient = ingrInput.val().split(",")
    var time = timeInput.val()
    var images = [imagesInput.val()]


    var stored = tastyWorld.factoryrecipes(name, country, flagCountry, category, ingredient, images, time)


    tastyWorld.displayrecipes()
    $('#addRecipe').hide()
})



// How to prepare & Add html
$("img").click(function () {
    window.location.href = "description.html"
})

$('#recipeDetails').append(

    `<h2 class='dish'>${tastyWorld.listrecipes[0].description}</h2>`
)
















































