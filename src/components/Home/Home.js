import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
             <h2>This is Home Page</h2>
            <h4>Current User : {user? user.displayName:"No body"}</h4>
        </div>
    );
};

export default Home;