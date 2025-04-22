const recipes = {
    "Chicken Lollipop": {
        image: "https://gingerskillet.com/wp-content/uploads/2021/06/Kolaurundaimutton_F.jpg",
      ingredients: `
        - 10 chicken lollipops<br>
        - 2 tbsp cornflour<br>
        - 2 tbsp all-purpose flour<br>
        - 1 tbsp ginger-garlic paste<br>
        - Red chili powder, salt<br>
        - Oil for frying
      `,
      instructions: `
        1. Marinate chicken with spices and paste.<br>
        2. Coat with flours and rest for 15 minutes.<br>
        3. Deep fry until golden brown and crispy.<br>
        4. Serve hot with spicy sauce.
      `,
      tips: "Use a mix of cornflour and maida for that perfect crisp!"
    },
  
    "Kheema Balls": {
      image: "https://gingerskillet.com/wp-content/uploads/2021/06/Kolaurundaimutton_F.jpg",
      ingredients: `
        - 500g minced chicken/mutton<br>
        - 1 chopped onion<br>
        - 1 tbsp ginger-garlic paste<br>
        - 1 egg, breadcrumbs<br>
        - Spices: garam masala, chili, salt
      `,
      instructions: `
        1. Mix all ingredients and shape into balls.<br>
        2. Shallow or deep fry until crisp and cooked.<br>
        3. Serve with green chutney or dip.
      `,
      tips: "Adding mint and coriander leaves gives a refreshing flavor."
    },
  
    "Chicken Shawarma": {
      image: "https://lifeloveandgoodfood.com/wp-content/uploads/2020/04/Chicken-Shawarma_09_1200x1200.jpg",
      ingredients: `
        - 500g chicken strips<br>
        - 1 cup yogurt<br>
        - 1 tsp paprika, cumin, garlic<br>
        - Pita bread<br>
        - Lettuce, mayo, garlic sauce
      `,
      instructions: `
        1. Marinate chicken and grill or sauté.<br>
        2. Warm pita bread and fill with chicken and veggies.<br>
        3. Drizzle with garlic sauce.<br>
        4. Roll and serve hot.
      `,
      tips: "Use smoky paprika for authentic taste!"
    },
  
    "Prawns Fry": {
      image: "https://th.bing.com/th/id/OIP.PoeIM_rAnbvNnJlr6h8bNwHaE7?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ingredients: `
        - 300g cleaned prawns<br>
        - 1 tsp chili powder, turmeric<br>
        - 1 tsp garam masala<br>
        - 1 tbsp lemon juice<br>
        - Oil and curry leaves
      `,
      instructions: `
        1. Marinate prawns with spices.<br>
        2. Heat oil and fry curry leaves.<br>
        3. Add prawns and stir-fry until cooked.<br>
        4. Serve hot.
      `,
      tips: "Don’t overcook prawns—they turn rubbery!"
    },
  
    "Crab Stew": {
      image: "https://th.bing.com/th/id/OIP.e6fTwU5M6xkEQk2keOYXMwHaFi?w=191&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ingredients: `
        - 500g cleaned crabs<br>
        - 2 tomatoes<br>
        - 1 onion<br>
        - 1 tbsp ginger-garlic paste<br>
        - Coconut milk or water<br>
        - Masalas and oil
      `,
      instructions: `
        1. Sauté onion and paste, then add tomatoes.<br>
        2. Add crabs and spices, cook well.<br>
        3. Pour coconut milk and simmer.<br>
        4. Serve with rice or roti.
      `,
      tips: "Add a few curry leaves and crushed pepper for coastal flavor!"
    },
  
    "Paneer Masala": {
      image: "https://th.bing.com/th/id/OIP.a_4f2unmmlLR_KZYnZ2C1gHaI8?w=202&h=244&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ingredients: `
        - 250g paneer cubes<br>
        - 1 onion, 2 tomatoes<br>
        - 1 tbsp ginger-garlic paste<br>
        - Spices: turmeric, garam masala<br>
        - Cream or yogurt
      `,
      instructions: `
        1. Fry paneer lightly and set aside.<br>
        2. Cook onion, tomatoes, and paste in a pan.<br>
        3. Add spices and paneer. Simmer with cream.<br>
        4. Serve with naan or rice.
      `,
      tips: "Soak paneer in hot water to keep it soft."
    },
  
    "Dal Fry": {
      image: "https://th.bing.com/th/id/OIP.nhi-gQZpViK0G-fw40o5dgHaE8?rs=1&pid=ImgDetMain",
      ingredients: `
        - 1 cup toor dal<br>
        - 1 onion, 1 tomato<br>
        - 1 tsp mustard, cumin, garlic, curry leaves<br>
        - Spices: chili powder, turmeric
      `,
      instructions: `
        1. Cook dal until soft.<br>
        2. In a pan, sauté mustard, cumin, and curry leaves.<br>
        3. Add onion, tomato, spices, then mix with dal.<br>
        4. Simmer and serve with rice.
      `,
      tips: "Use ghee for a richer flavor."
    },
  
    "Palak Paneer": {
      image: "https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-featured.jpg",
      ingredients: `
        - 200g paneer<br>
        - 2 cups spinach (palak)<br>
        - Onion, tomato, garlic, spices
      `,
      instructions: `
        1. Blanch and puree spinach.<br>
        2. Cook onion, tomato, garlic and mix puree.<br>
        3. Add paneer and simmer.<br>
        4. Serve hot with roti or rice.
      `,
      tips: "Add a little cream for smoother texture."
    },
  
    "Coconut Rice": {
      image: "https://th.bing.com/th/id/OIP.PgD1q2UU2EJ59jjdxdTWLwHaLH?rs=1&pid=ImgDetMain",
      ingredients: `
        - 2 cups cooked rice<br>
        - 1 cup grated coconut<br>
        - 1 tsp mustard, urad dal, green chili<br>
        - Curry leaves
      `,
      instructions: `
        1. Heat oil, splutter mustard, dal, chili, and curry leaves.<br>
        2. Add coconut, sauté a minute.<br>
        3. Mix in rice and serve.
      `,
      tips: "Use fresh coconut for best flavor."
    },
  
    "Pancakes": {
    image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_1460/k/Photo/Series/2020-01-Battle-Pancakes/Battle-Pancakes-Serious-Eats/Battle-Pancakes-Serious-Eats-Light-and-Fluffy_015",
    ingredients: `
      - 1 cup flour<br>
      - 1 cup milk<br>
      - 1 egg<br>
      - 1 tbsp sugar<br>
      - 1 tsp baking powder<br>
      - Butter for cooking
    `,
    instructions: `
      1. Mix all ingredients to form a smooth batter.<br>
      2. Heat a pan and melt butter.<br>
      3. Pour batter to form pancakes.<br>
      4. Cook both sides until golden brown.<br>
      5. Serve hot with syrup and fruits.
    `,
    tips: "You can add vanilla essence or cinnamon for extra flavor!"
  },

  "Spaghetti Bolognese": {
    image: "https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/spaghetti-bolognese.jpg",
    ingredients: `
      - 200g spaghetti<br>
      - 500g minced beef<br>
      - 1 onion, chopped<br>
      - 2 garlic cloves, minced<br>
      - 400g canned tomatoes<br>
      - 1 tbsp olive oil
    `,
    instructions: `
      1. Cook spaghetti as per instructions.<br>
      2. Sauté onion and garlic in oil.<br>
      3. Add minced beef, cook till browned.<br>
      4. Add tomatoes and simmer for 20 minutes.<br>
      5. Serve over cooked spaghetti.
    `,
    tips: "Top with grated cheese or herbs for extra taste!"
  },

  "Fish Fry": {
    image: "https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg",
    ingredients: `
      - 4 fish fillets<br>
      - 1 tsp turmeric<br>
      - 1 tsp chili powder<br>
      - 1 tbsp lemon juice<br>
      - Salt to taste<br>
      - Oil for frying
    `,
    instructions: `
      1. Marinate fish with spices and lemon juice.<br>
      2. Heat oil in a pan.<br>
      3. Fry fish on medium flame until golden and crispy.<br>
      4. Serve hot with onion rings and lemon wedges.
    `,
    tips: "Use fresh fish and marinate for at least 30 minutes for better flavor."
  },

  "Chicken Kebabs": {
    image: "https://cookitonce.com/wp-content/uploads/2021/12/Easy-Chicken-Kebabs.jpg",
    ingredients: `
      - 500g boneless chicken<br>
      - 1/2 cup yogurt<br>
      - 1 tbsp ginger-garlic paste<br>
      - 1 tsp garam masala<br>
      - Skewers and oil for grilling
    `,
    instructions: `
      1. Mix all ingredients and marinate chicken.<br>
      2. Skewer the chicken pieces.<br>
      3. Grill or pan-fry until cooked.<br>
      4. Serve with mint chutney.
    `,
    tips: "Add a pinch of chaat masala before serving for extra zing!"
  },

  "Egg Fried Rice": {
    image: "https://spiceeats.com/wp-content/uploads/2020/07/Egg-Fried-Rice.jpg",
    ingredients: `
      - 2 cups cooked rice<br>
      - 2 eggs<br>
      - 1/2 cup chopped vegetables<br>
      - 2 tbsp soy sauce<br>
      - Oil, salt, pepper
    `,
    instructions: `
      1. Scramble eggs in oil and keep aside.<br>
      2. Stir-fry vegetables and add cooked rice.<br>
      3. Mix in eggs and soy sauce.<br>
      4. Toss everything well and serve hot.
    `,
    tips: "Use cold leftover rice for best texture."
    }
    
    // Populate the available recipes list dynamically
  };
  
  const recipeList = document.getElementById('recipe-list');
  
  for (let recipe in recipes) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<button class="recipe-button" data-recipe="${recipe}">${recipe}</button>`;
    recipeList.appendChild(listItem);
  }
  
  // Event listener for clicking on a recipe name
  const buttons = document.querySelectorAll('.recipe-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const recipeName = button.getAttribute('data-recipe');
      const recipe = recipes[recipeName];
      showRecipeDetails(recipeName, recipe);
    });
  });
  
  // Function to show recipe details
  function showRecipeDetails(recipeName, recipe) {
    document.getElementById('available-recipes').style.display = 'none';
    document.getElementById('recipe-details').style.display = 'block';
    document.getElementById('recipe-name').textContent = recipeName;
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-ingredients').innerHTML = `<h3>Ingredients:</h3>${recipe.ingredients}`;
    document.getElementById('recipe-instructions').innerHTML = `<h3>Instructions:</h3>${recipe.instructions}`;
    document.getElementById('recipe-tips').innerHTML = `<h3>Tips:</h3>${recipe.tips}`;
  }
  
  // Back button functionality
  document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('available-recipes').style.display = 'block';
    document.getElementById('recipe-details').style.display = 'none';
  });
  