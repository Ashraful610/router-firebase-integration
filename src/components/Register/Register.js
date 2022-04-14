import React from 'react';

const Register = () => {
    return (
        <div className='mt-4'>
            <h4>Please Register</h4>
             <form>
                   <input type="text" name="" placeholder='Your name' id="" />
                   <br />
                   <br />
                   <input type="email" name="" placeholder='Your email' id="" />
                   <br />
                   <br />
                   <input type="password" name="" placeholder='password' id="" />
                   <br />
                   <br />
                   <input type="submit" value="Register" />
             </form>
        </div>
    );
};

export default Register;