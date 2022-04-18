import React, {useEffect, useState} from 'react';



function Profilestored ({profileselected}) {
    const [profiles, setProfiles] = useState();
    const [profilescompaired, setProfilescompaired] = useState();


    useEffect(() => {

        if(profileselected.length === 2){

            fetch('http://localhost:3030/profileselected/'+ profileselected[0].value + '/' + profileselected[1].value)
            .then(res => res.json())
            .then(json => {
                setProfilescompaired(json.result);
                console.log("final test")
                console.log(json.result)

            })
        }
    },[profileselected])


    return (
        <div className="profileselected">
            <div className="headlist"> 
            <h2>Id</h2>
            <h2>Git Id</h2>
            <h2>Node Id</h2>
            <h2>Created At</h2>
            </div>


            <div className="list">
                {profilescompaired?.map((profile) => (
                    <div className="detailslist" key={profile.id}>
                            <p>{profile.login}</p>
                            <p>{profile.gitid}</p>
                            <p>{profile.node_id}</p>
                            <p>{profile.created_at}</p>      
                    </div>

                ))}
            </div>

        </div>
    )
    
}

export default Profilestored;