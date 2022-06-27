import React, { useState, useEffect } from 'react'

function Navbar({setResto}) {

    const [code, setCode] = useState(["   Postal code"])
    console.log('beginning')

    const fetchdata = () => {
        
        fetch("http://localhost:3030/"+ code)
           .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Sorry something went wrong")
                }
            })
            .then(data => {
                setResto(data)
            })
  
    }


    useEffect(() => {
        
        if (code){
            fetchdata()
        }
        
    }, [code])
    
    return (

        <div className='navbar'> 
            <img src='images/assi.gif' alt=''/>
            <input 
                type='text' 
                placeholder='Search..'
                value={code}
                onChange={(e) => setCode(e.target.value)} />
        </div>
    )
}

export default Navbar;