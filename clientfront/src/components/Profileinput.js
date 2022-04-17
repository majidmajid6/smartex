import React,{ useState } from 'react';



function Profileinput() {

    const [profilename, setProfilename]= useState('');
    const [body, setBody] = useState('');
    

    const handleClick = () => {

        fetch('http://api.github.com/users/'+profilename)
            .then(res => res.json())
            .then(json =>{   
                setBody(json);
                console.log(body.id);


            })

        fetch('http://localhost:3030/newprofile',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(()=>{
            console.log('Profile Added');
        })

    
    
    };


    return (
        <div>

            <label>Profile Name</label>
            <input  type="text"
                    value = {profilename}
                    onChange = {(e)=>setProfilename(e.target.value)}
                        
            /> 
            <button onClick={handleClick}> Save </button>  

        </div>
    )
    
}

export default Profileinput;