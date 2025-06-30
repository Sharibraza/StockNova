import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 border-bottom">
            <div className="row text-center ">
                <h1 className='mt-5 text-grey fs-1 ' style={{fontSize:"calc(2rem + 1.5vw)"}}>StockNova Products</h1>
                <p className=' mt-3 fs-4 '>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings</a> <i class="fa-solid fa-arrow-right-long text-primary"></i></p>
            </div>
        </div>
     );
}

export default Hero;