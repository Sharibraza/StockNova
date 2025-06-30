import React from 'react';

import './Universe.css'

function Universe() {
    let imgStyles = { height: "55px", maxWidthwidth: "100%" };
    return (
        <div className="container p-5">
            <div className="row text-center p-5">
                <h5 className='mb-5 text-muted'>Want to know more about our technology stack? Check out the <a href="#" >Zerodha.tech </a>blog.</h5>
                <h2 className='text-dark mt-5 text-body mb-4'>The Zerodha  Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row text-center p-5">
                <div className="col">
                    <img src="media/images/zerodhafundhouse.png" alt="zerodhafundhouse" style={imgStyles} />
                    <p >Our asset management venture <br />
                        that is creating simple and transparent index <br />
                        funds to help you save for your goals.</p>
                </div>
                <div className="col">
                    <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={imgStyles} />
                    <p >Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col">
                    <img src="media/images/tijori.svg" alt="tijori" style={imgStyles} />
                    <p >Investment research platform <br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.</p>
                </div>
            </div>
            {/* ... */}
            <div className="row text-center p-5">
                <div className="col">
                    <img src="media/images/streakLogo.png" alt="streakLogo" style={imgStyles} />
                    <p >Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding</p>
                </div>
                <div className="col">
                    <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" style={imgStyles} />
                    <p >Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col">
                    <img src="media/images/dittoLogo.png" alt="dittoLogo" style={imgStyles} />
                    <p >Personalized advice on life <br />
                        and health insurance. No spam <br />
                        and no mis-selling.
                        Sign up for free</p>
                </div>
            </div>
            <button className='btn btn-primary mt-5 fs-5  '>Sign up for free</button>
        </div>
    );
}

export default Universe;