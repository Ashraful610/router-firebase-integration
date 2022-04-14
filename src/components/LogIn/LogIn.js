import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const LogIn = () => {
    const [signInWithGoogle ,user]  =  useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = ( ) => {
        signInWithGoogle()
        .then(() => {
            navigate(from ,{replace: true})
        })
    }
    return (
        <div className='mt-4'>
             <h4>Please Log in </h4>
               <div style={{margin:'10px'}}>
                   <button onClick={handleGoogleSignIn}>Google sign IN</button>
               </div>
             <form>
                   <input type="email" name="" placeholder='Your email' id="" />
                   <br />
                   <br />
                   <input type="password" name="" placeholder='password' id="" />
                   <br />
                   <br />
                   <input type="submit" value="Log IN" />
             </form>
        </div>
    );
};

export default LogIn;