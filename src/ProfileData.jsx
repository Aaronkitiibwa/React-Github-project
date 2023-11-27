import { useState } from "react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import {useNavigate} from "react-router-dom";
function ProfileData(){

    // const navigate = useNavigate();

    const[username, setUsername] = useState(null);
    const[userProfile, setUserProfile] = useState(null)

    const fetchData = () =>{
        fetch(`https://api.github.com/users/${username}`)

        .then((response)=>response.json())
        
        
        .then((data)=>{

        setUserProfile(data);
        // navigate('/user')
        })

        .catch((error)=>{
            console.error("An error occured while fetching data", error)
        });
    };

    return(
        <MantineProvider
        theme={{
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
      >
        <>
        <div>
            <h1 className="text-3xl text-white mx-80">Github User Profile</h1>
            <input className="h-10 px-40 rounded-full mx-40 my-10"  type="text" placeholder="Enter Github username" 
            value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <button className=" mx-6 bg-white rounded-full px-10" onClick={fetchData}>Get Profile</button>

            {userProfile!==null && (
                <div>
                    <h2 className="mx-10 my-5">{userProfile.name}</h2>
                    <p className="mx-10 my-5" >Location: {userProfile.location}</p>
                    <p className="mx-10 my-5">Followers: {userProfile.followers}</p>
                    <p className="mx-10">Following: {userProfile.following}</p>

                    <img className="h-60" src= {userProfile.avatar_url} alt=""></img>
                </div>
            )}
            </div>
        </>
        </MantineProvider>
    )
}
export default ProfileData