import React from 'react';


function OpenAccount() {
    return (
        <div className="container p-5">
            <div className="row text-center ">
                <h2 className='mt-5 text-grey text-med'>Open a Zerodha account</h2>
                <p className=' mt-3 fs-5 '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary mt-4 p-2 fs-4 col-3  ' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;