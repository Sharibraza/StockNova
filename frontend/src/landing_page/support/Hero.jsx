import React from 'react';

function Hero() {
    return (
        <div className="container-fluid p-5" style={{backgroundColor:"#387ed1"}}>
            <div className="row mx-5 ">
                <div className="col-6 mx-5 h-50 text-white" >
                    <h4 className='mx-5'>Support Portal</h4>
                    <h4 className='mt-5 mx-5'>Search for an answer or browse help topics to create a ticket</h4>
                    <br />
                    <input type="text"
                        placeholder='Eg: How do i activate F&O, Why is my order getting rejected.. '
                        className=' mx-5 w-100  border-none p-3' />  <br />  <br />
                    <a href="#" className='aSupport '> Track account opening </a>
                    <a href="#" className='aSupport'>Track segment activation </a>
                    <a href="#" className='aSupport'>Intraday margins</a> <br />
                    <a href="#" className='aSupport '> Kite user manual </a>  
                </div>
                {/* <div className="col-6">
                     <a href="#" className='text-white'>Track Tickets</a>
                </div> */}
            </div>
        </div>
    );
}

export default Hero;