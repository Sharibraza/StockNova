import React from 'react';

function LeftSection({ imgSrc, productName, p, Link, learnMore, li}) {
    return (
        <div className="container mt-3 p-5 ">
            <div className="row p-5 ">
                <div className="col-8">
                    <img src={imgSrc} alt={productName} />
                </div>
                <div className="col-4 p-5 ">
                    <h2 className='text-grey'>{productName}</h2>
                    <p className=' mt-4 fs-5' style={{ fontFamily: "inter,serif", fontSize: "1rem", lineSeight: " 1.8", marginBottom: "15px" }}>{p}</p>
                    <div>
                        <a  href="#" style={{ textDecoration: "none" }}>{Link} {li} </a>
                        {learnMore}
                    </div>
                    <img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge" />
                    <img className='p-3' src="media/images/appstoreBadge.svg" alt="appstoreBadge" />
                </div>
            </div>
        </div>
    );
}

export default LeftSection;