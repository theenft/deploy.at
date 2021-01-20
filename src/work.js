import React from 'react'

// import { ReactComponent as SVGPizza } from './images/pizza.svg'
// import { ReactComponent as SVGEuro } from './images/euro.svg'
// import { ReactComponent as SVGAtomik } from './images/atomik.svg'
// import { ReactComponent as SVGHackFS } from './images/hackfs.svg'
// import { ReactComponent as SVGStock } from './images/stock.svg'
// import { ReactComponent as SVGBlockchain } from './images/blockchain.svg'

export const Work = (props) => {
  const { workRef } = props

  return (
    <section ref={workRef} className="row justify-content-center ">
      <div className="dots">
        <svg height="40" width="190">
          <polyline class="dots-line" points="20,20 70,20 120,20 170,20" />
          <marker id="circle-marker" markerWidth="9" markerHeight="9" refX="5" refY="5">
            <circle class="foreground" cx="5" cy="5" r="3" />
          </marker>
        </svg>
      </div>
      {/* <div className="col-md-6 pr-0 pl-0">
        <a href="https://winter-sea-9819.on.fleek.co/" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--pizza">
            <SVGPizza className="work-card-icon" />
            <h3 className="work-card-title">Pizza Swap</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/STYX2DAI/styx-core" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--euro">
            <SVGEuro className="work-card-icon" />
            <h3 className="work-card-title">Chainlink Euro</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://atomiklabs.io" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--atomik">
            <SVGAtomik className="work-card-icon" />
            <h3 className="work-card-title">Atomik Labs</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/atomiklabs/defuma" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--hackfs">
            <SVGHackFS className="work-card-icon" />
            <h3 className="work-card-title">Decentralised Full Market</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/deployAt/crypto-exchange" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--stock">
            <SVGStock className="work-card-icon" />
            <h3 className="work-card-title">Crypto Exchange</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/deployAt/blockchain" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--blockchain">
            <SVGBlockchain className="work-card-icon" />
            <h3 className="work-card-title">Private Blockchain</h3>
          </div>
        </a>
      </div> */}
    </section>
  )
}
