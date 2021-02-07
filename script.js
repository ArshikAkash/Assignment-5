const searched = () => {
	const inputText = document.getElementById('inputText');
	if (inputText.value === '') {
		alert('Sorry!!! No food found');
	} else {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText.value}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => displayFoods(data.meals));
	}
};
const displayFoods = (foods) => {
	const foodsDiv = document.getElementById('foods');
	foods.forEach((food) => {
		const foodDiv = document.createElement('div');
		foodDiv.className = 'food';
		const foodInfo = `<div onclick = "displayCountryDetails('${food.idMeal}')">
        <img src="${food.strMealThumb}">
        <h3 class = 'food-name'>${food.strMeal}</h3></div>
    `;
		foodDiv.innerHTML = foodInfo;
		foodsDiv.appendChild(foodDiv);
	});
};
const displayCountryDetails = (id) => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => renderCountryInfo(data.meals[0]));
};

const renderCountryInfo = (food) => {
	const foodDiv = document.getElementById('foodDetail');
	foodDiv.innerHTML = `
        <img src="${food.strMealThumb}"><div id="text">
        <h1 class = 'food-name'>${food.strMeal}</h1>
        <h4>Ingredients:</h4>
        <p>${food.strIngredient1}</p>
        <p>${food.strIngredient2}</p>
        <p>${food.strIngredient3}</p>
        <p>${food.strIngredient4}</p>
        <p>${food.strIngredient5}</p>
        <p>${food.strIngredient6}</p>
        <p>${food.strIngredient7}</p>
        <p>${food.strIngredient8}</p>
        <p>${food.strIngredient9}</p>
        <p>${food.strIngredient10}</p>
        <p>${food.strIngredient11}</p>
        <p>${food.strIngredient12}</p>
        <p>${food.strIngredient13}</p>
        <p>${food.strIngredient14}</p>
        <p>${food.strIngredient15}</p>
        <p>${food.strIngredient16}</p>
        <p>${food.strIngredient17}</p>
        <p>${food.strIngredient18}</p>
        <p>${food.strIngredient19}</p>
        <p>${food.strIngredient20}</p></div>
        
        
    `;
};
