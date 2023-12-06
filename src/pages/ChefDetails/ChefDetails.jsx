import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const ChefDetails = () => {
 
    const chefDetails= useLoaderData();
   // console.log(chefDetails)
      
  const {  chef_picture,chef_id,chef_name,years_of_experience,likes,number_of_recipes,bio, recipes} = chefDetails

    return (
        <div>
            <h3 className='text-3xl text-center mt-4 mb-5 text-emerald-400' >Warm Welcome To Our Chef Information Page </h3>

       <div className='flex justify-center items-center mb-4' >
       <div className="card  card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={chef_picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{chef_name}</h2>
    <p> <span className='text-2xl text-orange-500' >Bio</span> :{bio}</p>
    <p>Total Recipe: {number_of_recipes} </p>
    <p>Experience: {years_of_experience} </p>
    <p>likes: <span className='inline-flex text-red-700'><AiOutlineLike></AiOutlineLike></span>  {likes} </p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
    </div>
       </div>

   {/* recipe info and cooking method */}

   <div className='bg-neutral-600 p-12' >

<h3 className='text-3xl text-center mt-4 mb-5 text-emerald-400' >Here the Best Recipe of our Chef </h3>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
       {
          recipes?.map( recipe =>  <SingleRecipe  
            key={recipe.recipe_id}
            recipe={recipe}
          >

          </SingleRecipe>  )
       }

     </div>
 </div>


        </div>
    );
};

export default ChefDetails;