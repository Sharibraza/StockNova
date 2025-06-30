import React, { useState } from 'react';

function StatsCal() {
    const [imgSrc, setImgSrc] = useState("media/images/Equity.png");

    let handleEquity = () => { setImgSrc("media/images/Equity.png"); }
    let handleCurrency = () => { setImgSrc("media/images/Currency.png"); }
    let handleCommodity = () => { setImgSrc("media/images/Commodity.png");}

    return (
        <div className="container ">
            <div className="row px-5 ">
                <div className="pricingType  d-flex fs-3  ">
                    <div className=' text-dark border-3 border-bottom border-primary p-2  ' onClick={handleEquity}>Equity</div>
                    <div className='text-primary mx-5 p-2' onClick={handleCurrency} >Currency</div>
                    <div className='text-primary p-2' onClick={handleCommodity}>Commodity</div>
                </div>
                <div className="calculations p-3 ">
                    <img style={{ height: "70vh", width: "78vw" }} src={imgSrc} alt="StatsCal" />
                </div>
                <h4 className='text-center' ><a className='text-primary text-decoration-none'>Calculate your costs upfront</a> using our brokerage calculator</h4>
            </div>
        </div>
    );
}

export default StatsCal;