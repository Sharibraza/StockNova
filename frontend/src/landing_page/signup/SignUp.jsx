import React from 'react';
import Head from './Head';
import OpenAccount from '../OpenAccount'
import Register from './Register';

function SignUp() {
    return ( 
         <>
            <Head/>
            <Register/>
            <OpenAccount/>
        </>
     );
}

export default SignUp;