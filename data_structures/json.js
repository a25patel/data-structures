// Recipe
var cremeBrulee = {
	ingredients: [
		"eggs",
		"heavy cream",
		"vanilla pods"
	],
	cookware: [
		"mixing bowl",
		"whisk",
		"ramekins",
		"oven",
		"measuring cups"
	]
}

function getIngredients(recipe) {
  if (recipe.hasOwnProperty('ingredients')) {
    return 'Ingredients: ' + recipe['ingredients'];
  }else {
    return false;
  }
}

console.log(getIngredients(cremeBrulee));

function getCookwares(recipe) {
  if (recipe.hasOwnProperty('cookware')) {
    return 'Cookware Required: ' + recipe['cookware'];
  }else {
    return false;
  }
}

console.log(getCookwares(cremeBrulee));

function getFirstIngredient(recipe) {
  if (recipe.hasOwnProperty('ingredients')) {
    return 'Start With: ' + recipe['ingredients'][0];
  }else {
    return false;
  }
}

console.log(getFirstIngredient(cremeBrulee));


// Other Variations
// 1. Get nth Cookware (recipe, n)
// 2. Add ingredient (recipe , ingredient)
// 3. edit ingredient (recipe, index, new ingredient)
// 4. add 'rotten' in front of all ingredients
