import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import ChefDetails from '../pages/ChefDetails/ChefDetails';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
          <ChefDetails></ChefDetails>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;