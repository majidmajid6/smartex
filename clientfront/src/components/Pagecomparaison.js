import React, {useState} from 'react';
import Profileselect from './Profileselect';
import Profilecomparaison from './Profilecomparaison';



function Comparaison_page() {

    const [profileselected, setProfileseleted] = useState("");
    console.log("test 2");
    console.log(profileselected);

    
    return (
        <div>
            <div>
                <Profileselect setProfileselected = {setProfileseleted}/>
            </div>

            <div>
                <Profilecomparaison profileselected ={profileselected}/>
            </div>
        </div>
    )
}

export default Comparaison_page;