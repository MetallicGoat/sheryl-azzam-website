"use client";

const recipes = [
  {
    title: "Recipe 1",
  },

  {
    title: "Recipe 2",
  },

  {
    title: "Recipe 3",
  },

  {
    title: "Recipe 4",
  }
]

export default function Recipes() {
  return (
    <div>
      {
        recipes.map((data, index) => (
          <h1 key={index}>{data.title}</h1>
        ))
      }
    </div>
  );
}