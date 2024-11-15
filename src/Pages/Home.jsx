import React from 'react';
import Banner from '../Components/Banner';
import NewItems from '../Components/NewItems';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <div className=' max-w-7xl mx-auto'>
                 <NewItems></NewItems>
            </div>
          
        </div>
    );
};

export default Home;