import React from 'react';


function Pricing() {
    return ( 
       <div className="container">
          <div className="row p-5">
            <div className="col-6 p-5">
                <h1 className='fs-2'>Unbeatable pricing</h1>
                <p className='text-muted mt-4'>We pioneered the concept of discount broking and price <br />transparency in India. Flat fees and no hidden charges.</p>
                <a href=""  style={{textDecoration:"none"}}>See pricing &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="col-6  mt-4 ">
               <div className="row">
               <div className="col">
                    <img src="/media/images/pricing0.svg" alt="pricing0"  /> Free account opening 
                </div>
                <div className="col">
                    <img src="/media/images/pricingMF.svg" alt="pricingMF"  /> 
                    Free equity delivery and direct mutual funds
                </div>
                <div className="col">
                    <img src="/media/images/pricing20.svg" alt="pricing20"  /> 
                    Intraday and F&O
                </div>
               </div>
            </div>
          </div>
       </div>
     );
}

export default Pricing;