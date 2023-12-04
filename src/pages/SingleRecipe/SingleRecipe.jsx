import React from 'react';
import { AiOutlineLike } from "react-icons/ai";

const SingleRecipe = ({recipe}) => {
    console.log(recipe)
    const {recipe_name,recipe_id,cooking_method,ingredients,rating} = recipe
    return (
        <div >
            <div className="card card-compact w-96 flex flex-col mb-0' bg-base-100 shadow-xl">
  {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>Ingredients: </p>
     
     {
        ingredients.map( (ingredient, index ) => <li
          key={index}
        >
            {ingredient}
            </li>  )
     }
      
    <p className='p-2'>Rating:{rating}</p>
    <p className='p-3 ps-2'>Cooking Method: {cooking_method}</p>
      

    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add To Favourites</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;