import React from 'react';
import { AiOutlineLike } from "react-icons/ai";


const SingleChefData = ({chef}) => {
    console.log(chef)
    const {chef_picture,chef_id,chef_name,years_of_experience,likes,number_of_recipes} =chef
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={chef_picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{chef_name}</h2>
    <p>experience: {years_of_experience} years</p>
    <p>Total Recipe: {number_of_recipes} </p>
    <p>likes: <span className='inline-flex text-red-700'><AiOutlineLike></AiOutlineLike></span>  {likes} </p>
    <div className="card-actions">
      <button className="btn btn-primary">View Recipes</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleChefData;