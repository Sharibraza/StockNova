import React from 'react';

function CreateTicket() {
  let styles={listStyle:"none",marginTop:"1rem",lineHeight:"2rem"};
  let aColor={color:"rgb(122,187,235)",textDecoration:"none"};
    return (
        <div className="container p-5">
            <div className="row p-5">
                <h5 className='text-muted '>To create a ticket, select a relevant topic</h5>
                <div className="row mt-4 ">
                    <div className="col-4 ">
                        <a href="#" className='text-decoration-none fs-5 text-dark '> <i class="fa-solid fa-circle-plus"></i> &nbsp;Account Opening</a>
                        <ul style={styles}>
                            <li><a href="#"   style={aColor}>Resident individual</a></li>
                            <li><a href="#"  style={aColor}>Minor</a></li>
                            <li><a href="#" style={aColor}>Non Resident Indian (NRI)</a></li>
                            <li><a href="#" style={aColor}>   Company, Partnership, HUF and LLP</a></li>
                            <li><a href="#" style={aColor}>Glossary</a></li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                        <a href="#" className='text-decoration-none fs-5 text-dark '> <i class="fa-regular fa-user"></i> &nbsp; Your Zerodha Account</a>
                        <ul style={styles}>
                            <li><a href="#"  style={aColor}>Your Profile</a></li>
                            <li><a href="#"  style={aColor}>Account modification</a></li>
                            <li><a href="#" style={aColor}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                            <li><a href="#" style={aColor}>  Nomination</a></li>
                            <li><a href="#" style={aColor}>Transfer and conversion of securities</a></li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                        <a href="#" className='text-decoration-none fs-5 text-dark '> <i class="fa-solid fa-signal"></i>&nbsp;  Kite</a>
                        <ul style={styles}>
                            <li><a href="#"   style={aColor}>IPO</a></li>
                            <li><a href="#"  style={aColor}>Trading FAQs</a></li>
                            <li><a href="#" style={aColor}>Margin Trading Facility (MTF) and Margins</a></li>
                            <li><a href="#" style={aColor}>Alerts and Nudges</a></li>
                            <li><a href="#" style={aColor}>General</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-4 ">
                    <div className="col-4 ">
                        <a href="#" className='text-decoration-none fs-5 text-dark '><i class="fa-regular fa-envelope"></i> &nbsp; Funds</a>
                        <ul style={styles}>
                            <li><a href="#"   style={aColor}>Add money</a></li>
                            <li><a href="#"  style={aColor}>Withdraw money</a></li>
                            <li><a href="#" style={aColor}>Add bank accounts</a></li>
                            <li><a href="#" style={aColor}>eMandates</a></li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                        <a href="#" className='text-decoration-none fs-5 text-dark '> <i class="fa-regular fa-copyright"></i> &nbsp; Console</a>
                        <ul style={styles}>
                            <li><a href="#"  style={aColor}>Portfolio</a></li>
                            <li><a href="#"  style={aColor}>Corporate actions</a></li>
                            <li><a href="#" style={aColor}>Funds statement</a></li>
                            <li><a href="#" style={aColor}>Reports</a></li>
                            <li><a href="#" style={aColor}>Profile</a></li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                        <a href="#" className='text-decoration-none fs-5 text-dark '> <i class="fa-solid fa-coins"></i>&nbsp;  Coin</a>
                        <ul style={styles}>
                            <li><a href="#"   style={aColor}>Understanding mutual funds and Coin</a></li>
                            <li><a href="#"  style={aColor}>Coin app</a></li>
                            <li><a href="#" style={aColor}>Coin web</a></li>
                            <li><a href="#" style={aColor}>Transactions and reports</a></li>
                            <li><a href="#" style={aColor}>National Pension Scheme (NPS)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;