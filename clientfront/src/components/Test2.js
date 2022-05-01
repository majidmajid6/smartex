import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const Test2 = ({setpositive, positive, setnegative, negative}) => {

    let history = useHistory();
    const [answer, setAnswer] = useState("");

    const handleClick = () => {
        const result = answer.localeCompare("prijatelju");
        
        if (result === 0){
            const count = positive + 1;
            setpositive(count);

        }else{
            const count = negative + 1;
            setnegative(count);
        }

        history.push("/test3");

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
            <img src="./images/friend.png" alt="" width="200" height="100"/>
            <h5>Friend</h5>
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

export default Test2;
