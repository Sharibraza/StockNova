import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className="container p-5" >
            <div className="row text-center  ">
                <img src="/media/images/homeHero.png" alt="homeHero"  style={{width:"65%", height:"50vh",margin:"0 auto"}} />
                <h1 className='mt-5 fs-1'>Invest in everything</h1>
                <p className=' mt-3 fs-5 '>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary mt-5 p-2 fs-4 col-3  'style={{width:"20%",margin:"0 auto",backgroundColor:"#387ed1"}} > <Link class="nav-link " to="/signup">Sign up for free</Link></button>
            </div>
        </div>
     );
}

export default Hero;