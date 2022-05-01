import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const Test8 = ({setpositive, positive, setnegative, negative}) => {

    let history = useHistory();
    const [answer, setAnswer] = useState("");

    const handleClick = () => {
        const result = answer.localeCompare("speed limite");
        
        if (result === 0){
            const count = positive + 1;
            setpositive(count);

        }else{
            const count = negative + 1;
            setnegative(count);
        }

        history.push("/fin");

    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleClick();
        }
    };

   
   
    return (
        <div className="test1">
            <img src="./images/speedlimite.png" alt="" width="200" height="100"/>
            <h5>Speed Limite</h5>
            <input  type="text"
                    value = {answer}
                    onChange = {(e)=>setAnswer(e.target.value)}
                    onKeyPress={handleKeypress}
            />
            <button onClick={handleClick}>Let see</button>
            <p> 👍 {positive}/20                     👎{negative}/20</p>
        </div>
    )
}

export default Test8;
