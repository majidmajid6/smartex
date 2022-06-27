import React from 'react';
import Restolists from './Restolists';



const Home = ({resto}) => {
   
    const data = resto.CuisineDetails;

    return (
        <div className="home">
             {data && <Restolists data={data}/>}
        </div> 
    )
}

export default Home;
