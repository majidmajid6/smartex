import React from 'react';


const Fin = ({setpositive, positive, setnegative, negative}) => {

    fetch('http://localhost:3030/newscore',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"score" : positive})
    })
   
    return (
        <div className="test1">
        <br/>
        <br/>
        <h1> Your positive soccer is </h1>
        <br/>
        <br/>
        <h1>{positive}</h1>
        </div>
    )
}

export default Fin;
