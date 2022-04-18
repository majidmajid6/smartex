import React,{useEffect, useState} from 'react';
import Select from 'react-select';





function Profileselect({setProfileselected}) {


    const [selected, setSelected] = useState([]);
    const [profiles, setProfiles] = useState();
    const options = [];


    useEffect(() => {
        fetch('http://localhost:3030/getprofiles')
            .then(res => res.json())
            .then(json => {
                setProfiles(json.result);
            });
    },[])

    useEffect(() => {
        setProfileselected(selected);
        console.log("test 1");
        console.log(selected);
        
    }, [selected]);

    profiles?.map((profiles) => (
        options.push({value: profiles.login, label: profiles.login})
    
    ))



    return (
        <div className="profileselect">


            <Select isMulti={true} options={options} 
                onChange={setSelected}
            />


        </div>
    )
    
}

export default Profileselect;







{/* <pre>{JSON.stringify(selected)}</pre> */}

// useEffect(() => {
//     setProfileselected(selected);
//     console.log("test 1");
//     console.log(selected);
    
// }, [selected]);