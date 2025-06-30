import React from 'react';


function Education() {
    return (
        <div className="container p-5 ">
            <div className="row  p-5">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="education" />
                </div>
                <div className="col-6 mt-5">
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p className='text-muted mt-4'>Varsity, the largest online stock market education book in the world <br />covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>Varsity &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                    <br /><br />
                    <p className='text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}>TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;