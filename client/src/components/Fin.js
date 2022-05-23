import React from 'react';


const Fin = ({score}) => {

    fetch('http://localhost:3030/newscore',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"score" : score})
    })
   
    return (
        <div className="test1">
        <br/>
        <br/>
        <h1> Your positive score is </h1>
        <br/>
        <br/>
        <h1>{score}</h1>
        </div>
    )
}

export default Fin;
