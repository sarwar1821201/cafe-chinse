import React from 'react';

const SpecilaMenu = () => {
    return (
        <div>
            <h2 className='text-center text-3xl mt-5 mb-8'>Our Special Menu</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/W62DRnQ/photo-1490645935967-10de6ba17061-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Poached Egg With Vegetable & Tomatoes</h2>
    <p> "Poached eggs nestled on a bed of sautéed mixed vegetables and diced tomatoes, creating a nutritious and flavorful dish. A perfect blend of protein and veggies, seasoned to perfection."</p>
    <p> <span className='text-yellow-700'>Ingredients: </span> Eggs,Mixed vegetables (e.g., spinach, bell peppers, onions),Tomatoes, diced,Olive oil,Salt and pepper to taste
  </p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Check Discount</button>
    </div>
  </div>
</div>


<div className="card lg:card-side bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">sliced-tomatoes-with-ground-pork</h2>
    <p>"Sliced Tomatoes with Ground Pork is a savory dish featuring tender tomatoes paired with flavorful ground pork, sautéed with onions and garlic, seasoned to perfection. A quick and delightful option for a tasty meal."</p>
    <p> <span className='text-yellow-700'>Ingredients: </span> Sliced tomatoes,Ground pork,Onion, finely chopped
Garlic, minced,Soy sauce,Salt and pepper to taste,Cooking oil
  </p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Apply For Discount</button>
    </div>
  </div>
  <figure><img src="https://i.ibb.co/W3Q5YXf/photo-1518779578993-ec3579fee39f-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="Album"/></figure>
</div>


        </div>
    );
};

export default SpecilaMenu;