import React, { useEffect, useState } from 'react';

import Hero from './Hero'
import StatsCal from './StatsCal'
import ChargesExp from './ChargesExp'
import ChargesOnAccOpening from './ChargesOnAccOpening'
import OptionalCharges from './OptionalCharges'

function PricingPage() {
   return (
      <>
         <Hero />
         <StatsCal/>
         <ChargesExp />
         <ChargesOnAccOpening />
         <OptionalCharges />
      </>
   );
}

export default PricingPage;