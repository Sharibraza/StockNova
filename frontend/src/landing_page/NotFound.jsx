import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="container p-5">
                <div className="row  ">
                    <h3 className='mt-5 text-grey '>404</h3>
                    <h2 className=' mt-3 fs-1 '>Kiaan couldn’t <br />find that page </h2>
                    <p className='fs-5'> We couldn’t find the page you were looking <br />for Visit 
                      <br /> <br />
                      <Link  to="/">StockNova's home page</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;