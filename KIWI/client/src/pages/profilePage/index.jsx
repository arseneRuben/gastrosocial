import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";


const ProfilePage = () => {

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
  
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
    });
    const logOut = () => {
      googleLogout();
      setProfile(null);
    };

    
    return <div>
    <h2>Profile page</h2>
    <br />
    <br />
    {profile ? (
        <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
        </div>
    ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
    )}
</div>

 
};
export default ProfilePage;