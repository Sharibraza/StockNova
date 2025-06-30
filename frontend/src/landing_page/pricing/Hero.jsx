import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mt-5">
            <div className="row p-5 text-center ">
                <h1 style={{color:"#424242",fontSize:"3rem"}}>Charges</h1>
                <p className='text-muted mt-2  fs-5'>List of all charges and taxes</p>
            </div>
            <div className="row p-5 mb-0  ">
                <div className="col mt-3 text-center">
                     <img className='h-50' src="/media/images/pricing0.svg" alt="pricing0" /> 
                     <h2>Free equity delivery </h2>
                     <p className='fs-6'>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col mt-3 text-center">
                     <img className='h-50' src="/media/images/pricing20.svg" alt="pricing20" /> 
                     <h2>Intraday and F&O trades </h2>
                     <p className='fs-6 '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col mt-3 text-center">
                     <img className='h-50' src="/media/images/pricing20.svg" alt="pricing20" /> 
                     <h2>Free direct MF</h2>
                     <p className='fs-6 '>All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
