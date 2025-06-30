import React from 'react';

function Stats() {
    return (  
        <div className="container mt-3 p-4" >
        <div className="row  p-5">
          <div className="col-6 p-5" style={{ height: "550px" }}>
  
            <h1 className='fs-2'>Trust with confidence</h1>
            <h2 className=' fs-4 mt-5'>Customer-first always</h2>
            <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br />₹4.5+ lakh crores of equity investments and contribute to <br />15% of daily retail exchange volumes in India.</p>
  
            <h2 className='fs-4'>No spam or gimmicks</h2>
            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br />notifications. High quality apps that yo  use at your <br /> pace, the way you like.</p>
  
            <h2 className='fs-4' >The Zerodha universe</h2>
            <p className='text-muted' >Not just an app, but a whole ecosystem. Our investments <br />in 30+ fintech startups offer you ta lored services <br />specific to your needs.</p>
  
            <h2 className='fs-4' >Do better with money</h2>
            <p className='text-muted' >With initiatives like Nudge and Kill Switch, we don't just <br /> facilitate transactions, but actively help you do better <br /> with your money.</p>
  
          </div>
          <div className="col-6 mb-5 " style={{ height: "550px" }}>
            <img className="mt-4" src="/media/images/ecosystem.png" alt="ecosystem" style={{ height: "95%" }} />
            <div className='text-center ' >
              <a className='mx-5' href="" style={{textDecoration:"none"}}>Explore our products &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
              <a href="" style={{textDecoration:"none"}}>Try Kite demo &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <img className=' mt-5 ' src="/media/images/pressLogos.png" alt="pressLogos" style={{ height: "2.5rem", width: "60%", marginLeft: "20%" }} />
        </div>
      </div>
    );
}

export default Stats;
<h1>Stats</h1>