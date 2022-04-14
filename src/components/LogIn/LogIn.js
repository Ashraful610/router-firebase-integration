import React from 'react';

const LogIn = () => {
    return (
        <div className='mt-4'>
             <h4>Please Log in </h4>
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