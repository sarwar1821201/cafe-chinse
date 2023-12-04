import React, { useEffect, useState } from 'react';

const ChefCard = () => {

     const [chefData, setChefData ] =useState([]);
     
     useEffect( ()=>{
      
        fetch('http://localhost:5000/chefs')
        .then(res=> res.json() )
        .then(data=> console.log(data)  )
  

     } , [] )
  
    return (
        <div className='bg-zinc-700 p-12' >

       <h3 className='text-3xl text-center mt-4 mb-5 text-emerald-400' >Meet Our WonderFul Chefs </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            </div>
        </div>
    );
};

export default ChefCard;