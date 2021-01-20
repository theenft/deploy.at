import React from 'react'

import { IntroExtra } from './intro-extra'
import IMGEth from './images/eth.png'
import IMGDot from './images/dot.png'

export const Intro = (props) => {
  return (
    <section className="row justify-content-md-center">
      <div className="col-md-6 intro">
        <h1 className="intro-text-top">Hi! I'm Nick.</h1>
        <h1>A software engineer who builds the Future with Blockchains.</h1>

        <div className="intro-logos">
          <img src={IMGEth} alt="ethereum" className="intro-logos-eth" />
          <img src={IMGDot} alt="polkadot" className="intro-logos-dot" />
        </div>

        <IntroExtra />
      </div>
    </section>
  )
}
