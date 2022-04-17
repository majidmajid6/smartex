import React from 'react';
import Profilestored from './Profilestored';
import Profileinput from './Profileinput';



function Pagesauvegarde() {
    
    return (
        <div className="pages">
            <div>
                <Profileinput/>
            </div>

            <div>
                <Profilestored/>
            </div>

        </div>
    )
}

export default Pagesauvegarde;