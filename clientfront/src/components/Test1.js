import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const Test1 = ({setScore}) => {

    let history = useHistory();

    const [positive, setpositive] = useState(0);
    const [negative, setnegative] = useState(0);

    const [answer, setAnswer] = useState("");
    const [page, setPage] = useState(0);

    const word = ["happy","friend","book","car","carrot","earth","soldier","speedlimite"];
    const trad = ["srecan","prijatelju","knjiga","auto","sargarepa","zemlja","vojnik","ogranicenje brzine"];



    const handleClick = () => {
        const result = answer.localeCompare(trad[page]);
        
        if (result === 0){
            const count = positive + 1;
            setpositive(count);

        }
        else if (page === 7){
            setScore(positive);
            history.push("/fin");
        }
        else{
            const count = negative + 1;
            setnegative(count);
            console.log("incorrect");
        }

        setPage((currPage) => currPage +1);

    }

    function handleKeyPress(e) {
        if(e.key === "Enter"){
            handleClick();
            console.log( "You pressed a key." )
        }
    }

   
   
    return (
        <div className="test1">
            <img src={`./images/${word[page]}.png`} alt="" width="200" height="100"/>
            <h5>{word[page]}</h5>
            <input  type="text"
                    value = {answer}
                    onChange = {(e)=>setAnswer(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}
                                />
            <button onClick={handleClick}>Let see</button>
            <p> 👍 {positive}/20                     👎{negative}/20</p>
        </div>
    )
}

export default Test1;
