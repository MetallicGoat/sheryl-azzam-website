"use client";

import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const recipes = [
  {
    title: "Apple Cake with Caramel Sauce",
    ingredients: {
      cake: [
        "1 cup sugar",
        "2 eggs",
        "1/4 cup butter (room temp)",
        "1 cup flour",
        "1 tsp cinnamon",
        "1 tsp baking soda",
        "1/4 tsp salt",
        "2 cups peeled & chopped apples"
      ],
      sauce: [
        "1/2 cup brown sugar",
        "1/2 cup white sugar",
        "1/2 cup 18% cream",
        "1/4 cup butter"
      ]
    },
    directions: [
      "Preheat oven to 350°F. Grease 9\" sq baking pan.",
      "Beat sugar, butter, eggs until light & fluffy.",
      "Combine (separate bowl) flour, cinnamon, baking soda, salt.",
      "Stir dry ingredients into wet. Add apples.",
      "Pour into pan. Bake 30–40 min. Centre of cake should spring back when touched gently.",
      "Sauce: Combine all sauce ingredients in a saucepan. Bring to boil, stir until thickened."
    ]
  },
  {
    title: "Chicken Shawarma Rice",
    ingredients: {
      chicken: [
        "1 pound thighs, cut into bite size pieces",
        "4-5 cloves crushed garlic",
        "1 teaspoon each: cumin, paprika, cinnamon",
        "1/2 teaspoon each: salt, pepper, allspice, coriander, fenugreek",
        "2 large spoonfuls (approx) plain yogurt"
      ],
      rice: [
        "1 large-ish onion",
        "3 cloves crushed garlic",
        "2 tbsp olive oil",
        "1 1/2 tsp salt",
        "1/2 teaspoon each: cinnamon, turmeric, cumin, pepper, coriander",
        "2 cups basmati rice",
        "3 cups water OR low sodium stock",
        "1 can chickpeas"
      ]
    },
    directions: [
      "Mix marinade ingredients together. Add enough yogurt to make a paste. Leave in covered bowl or Ziploc up to 24 hrs in fridge.",
      "Sear chicken (don't cook all the way) once all sides are browned in hot pan. Best to sear in 2 batches. Remove to a plate for later.",
      "Deglaze pan if necessary with a splash of water or stock. Save liquid.",
      "Add fresh oil to pan and cook onion until soft.",
      "Add crushed garlic, spices, and salt.",
      "Add washed, drained rice; stir into onion/spices.",
      "Add chicken back in, can chickpeas, and water/stock. Once it simmers, cover with lid and simmer undisturbed 20 min (DO NOT BOIL). Simmer gently on low heat.",
      "After 20 min, remove from heat, fluff rice with fork. Serve with garlic sauce (homemade or store-bought)."
    ]
  },
  {
    title: "Lamb Meatballs",
    ingredients: [
      "1 lb ground lamb",
      "2 tbsp sour cream",
      "1 tbsp minced fresh garlic",
      "1 tsp each: salt, onion powder, ground cumin",
      "1/2 cup chopped fresh cilantro"
    ],
    directions: [
      "Mix all ingredients with bare hands in bowl.",
      "Using spoon, scoop out even portions of mixture and roll gently into balls (about 16 tablespoon-sized balls). If too sticky, add a bit of flour.",
      "Option 1: Bake 15 minutes at 400°F.",
      "Option 2: Sauté for better flavor. Heat oil in large pan, add meatballs in single layer to cook, turning frequently until golden brown (about 5 min).",
      "Add 1/4 cup water to pan, cover with lid and cook another 3 minutes.",
      "Add to curry sauce, pasta sauce, or eat as is."
    ]
  },
  {
    title: "Southwest Chicken Chili",
    ingredients: [
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 tbsp olive oil",
      "1 QT chicken broth (about 900 mL, low sodium)",
      "15 oz can diced tomato (~400 mL)",
      "3 tsp chili powder",
      "1 1/2 tsp oregano",
      "1 1/2 tsp salt",
      "Meat from rotisserie chicken",
      "2 cans black beans",
      "2 cups corn"
    ],
    optionalToppings: [
      "Cheese",
      "Avocado",
      "Guacamole",
      "Cilantro",
      "Sour cream",
      "Tortilla chips"
    ],
    directions: [
      "In a large pot, cook onion. Add garlic, spices.",
      "Add broth, tomatoes. Bring to boil. Simmer 5 min.",
      "Add beans, corn, chicken. Simmer another 5 min.",
      "Serve with desired toppings."
    ]
  },
  {
    title: "Thai Coconut Curry",
    ingredients: [
      "2 tbsp oil",
      "1/2 onion, chopped",
      "2 tsp fresh ginger, grated or minced",
      "1 tsp turmeric",
      "1/2 tsp salt",
      "2 cloves garlic, crushed",
      "1 tbsp red curry paste (or more to your liking)",
      "1 tbsp brown sugar",
      "1 can coconut milk",
      "2 tbsp fish sauce",
      "Grated zest and juice of 1 lime"
    ],
    notes: "Versatile recipe; add veggies and protein like red bell pepper, carrot, spinach, peas, cooked diced chicken, tofu, or white fish (e.g., basa) or shrimp.",
    directions: [
      "Heat oil. Cook onion. Add ginger, garlic, turmeric, curry paste, sugar.",
      "Pour in coconut milk and fish sauce. Simmer uncovered, cook 10 min.",
      "Remove from heat. Add lime juice and zest.",
      "Add veggies, cook 5 min until tender.",
      "Add protein (fish, chicken, shrimp). Cook 5 min or until shrimp is pink or fish is cooked through.",
      "Serve over rice.",
      "Garnish with green onion or cilantro."
    ]
  }
];


export default function Recipes() {
  const [expanded, setExpanded] = useState(new Set());

  const toggleExpand = (index) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(index)) {
      newExpanded.delete(index); // Collapse this one
    } else {
      newExpanded.add(index); // Expand this one
    }
    setExpanded(newExpanded);
  };

  return (
    <div className="py-4 w-full">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="mb-4 p-4 border rounded-2xl bg-yellow-800/30 shadow-md transition-all"
        >
          <button
            onClick={() => toggleExpand(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-2xl font-semibold">{recipe.title}</h2>
            <span className="text-2xl">{expanded.has(index) ? "−" : "+"}</span>
          </button>

          <AnimatePresence initial={false}>
            {expanded.has(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4">

                  {/* Ingredients */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Ingredients</h3>

                    {Array.isArray(recipe.ingredients) ? (
                      <ul className="list-disc list-inside">
                        {recipe.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))}
                      </ul>
                    ) : (
                      Object.entries(recipe.ingredients).map(([section, items], idx) => (
                        <div key={idx} className="mb-2">
                          <h4 className="text-lg font-medium">{section}</h4>
                          <ul className="list-disc list-inside ml-4">
                            {items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    )}

                    {/* Optional toppings */}
                    {recipe.optionalToppings && (
                      <div className="mt-4">
                        <h4 className="text-lg font-medium">Optional Toppings</h4>
                        <ul className="list-disc list-inside ml-4">
                          {recipe.optionalToppings.map((topping, idx) => (
                            <li key={idx}>{topping}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Directions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Directions</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      {recipe.directions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Notes */}
                  {recipe.notes && (
                    <div className="mt-4 p-4 bg-yellow-100/50 rounded-xl">
                      <p className="italic">{recipe.notes}</p>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}