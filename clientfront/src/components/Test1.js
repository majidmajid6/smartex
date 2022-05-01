import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const Test1 = ({setpositive, positive, setnegative, negative}) => {

    let history = useHistory();
    const [answer, setAnswer] = useState("");

    const handleClick = () => {
        const result = answer.localeCompare("happy");
        
        if (result === 0){
            const count = positive + 1;
            setpositive(count);

        }
        // else{
        //     const count = ncounter + 1;
        //     setNcounter(count);
        //     console.log("incorrect");
        // }

        history.push("/test2");

    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleClick();
        }
    };

   
   
    return (
        <div className="test1">
            <img src="./images/happy.png" alt="" width="200" height="100"/>
            <h5>Happy</h5>
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

export default Test1;
