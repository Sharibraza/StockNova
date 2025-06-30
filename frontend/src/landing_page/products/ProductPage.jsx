import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
  let Lp1 ="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.";
  let Rp1 = `The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.`;
  let Lp2 = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  let Rp2 = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  let Lp3 = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
  let learnMore = <a className='mx-3' href="" style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a> ;
  let li =<i class="fa-solid fa-arrow-right-long"></i>
    return ( 
        <>
          <Hero/>
          <LeftSection imgSrc={"media/images/Kite.png"} productName={"Kite"} p={Lp1} Link="Try Demo " learnMore={learnMore} li={li}/>
          <RightSection imgSrc={"media/images/console.png"} productName="Console" p={Rp1}/>
          <LeftSection imgSrc={"media/images/coin.png"} productName={"Coin"} p={Lp2} Link="Coin" li={li}/>
          <RightSection imgSrc={"media/images/Kiteconnect.png"} productName="Kite Connect API" p={Rp2}/>
          <LeftSection imgSrc={"media/images/varsity.png"} productName={"Varsity mobile"} p={Lp3}/>
          <Universe/>
        </>
     );
}

export default ProductPage;