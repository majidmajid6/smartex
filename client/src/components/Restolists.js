import React from 'react';


function Restolists({data}) {

    return (
        <div className="list">       
            {data.map((resto) => (
                <div className="card" >
                        <h2>{resto.Name}</h2>
                        <p>Type : {resto.SeoName}</p>
                        <p>Rating : {resto.Total}</p>
                </div>
            ))}
        </div>  
    );
}

export default Restolists;