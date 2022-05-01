import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const Test3 = ({setpositive, positive, setnegative, negative}) => {

    let history = useHistory();
    const [answer, setAnswer] = useState("");

    const handleClick = () => {
        const result = answer.localeCompare("knjiga");
        
        if (result === 0){
            const count = positive + 1;
            setpositive(count);

        }else{
            const count = negative + 1;
            setnegative(count);
        }

        history.push("/test4");

    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleClick();
        }
    };

    function handleKeyPress(e) {
        if(e.key === "Enter"){
            handleClick();
            console.log( "You pressed a key." )
        }
    }
   
    return (
        <div className="test1">
            <img src="./images/book.png" alt="" width="200" height="100"/>
            <h5>Book</h5>
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

export default Test3;
