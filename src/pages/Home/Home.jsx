import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import SpecilaMenu from '../Special/SpecilaMenu';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <SpecilaMenu></SpecilaMenu>
            <ChefCard></ChefCard>
        </div>
    );
};

export default Home;