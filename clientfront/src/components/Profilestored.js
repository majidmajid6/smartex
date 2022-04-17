import React, {useEffect, useState} from 'react';






function Profilestored () {
    const [profiles, setProfiles] = useState();
    const [isloaded, setIsloaded] = useState(false)

    useEffect(() => {

        fetch('http://localhost:3030/getprofiles')
            .then(res => res.json())
            .then(json => {
                setProfiles(json.result);
                console.log(json.result);
                setIsloaded(true);
            });
    },[profiles])

    return (
        <div className="profilestored">
            <div className="headlist"> 
            <h2>Id</h2>
            <h2>Git Id</h2>
            <h2>Node Id</h2>
            <h2>Created At</h2>
            </div>

            <div className="list">
                {profiles.map((profile) => (
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