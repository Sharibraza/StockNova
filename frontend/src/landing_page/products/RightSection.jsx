import React from 'react';
import './RightSection.css'

function RightSection({imgSrc,productName,p}) {
    return ( 
        <div className="container  ">
            <div className="row p-5  ">
                <div className="col-4 p-5 main ">
                    <h2 className='text-grey'>{productName}</h2>
                    <p className=' mt-4 fs-5' style={{ fontFamily: "inter,serif", fontSize: "1rem", lineSeight: " 1.8", marginBottom: "15px" }}>{p}</p>
                    <a href="#" style={{textDecoration:"none"}}>Learn More &nbsp; <i class="fa-solid fa-arrow-right-long "></i></a>
                </div>
                <div className="col-6 ms-auto ">
                    <img  src={imgSrc} alt={productName} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;