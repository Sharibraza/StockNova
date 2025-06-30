import React from 'react';

function Team() {
   let styles={textDecoration:"none"};
    return ( 
        <div className="container mb-5">
            <div className="row text-center text-muted">
                 <h1>Founder</h1>
            </div>
            <div className="row ms-5 text-muted">
                 <div className="col-6 mt-4 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="Founder" style={{borderRadius:"100%",height:"20vw"}} />
                    <h5 className='mt-3'>Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                 </div>
                 <div className="col-6 mt-5 mb-5 " style={{lineHeight:"1.8em"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> hurdles he faced during his decade long stint as a trader. Today,<br /> Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee <br />(SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing football is his zen.</p>
                    <p >Connect on &nbsp;
                        <a href="#" style={styles}>Homepage  &nbsp; </a>  / 
                        <a href="#" style={styles}>  &nbsp;TradingQnA </a> / 
                        <a href="#" style={styles} >  &nbsp;Twitter</a>
                    </p>
                 </div>
            </div>
        </div>
     );
}

export default Team;