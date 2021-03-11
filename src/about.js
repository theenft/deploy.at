import React from 'react'

import { ReactComponent as SVGLinkedin } from './images/linkedin.svg'
import { ReactComponent as SVGGithub } from './images/github.svg'
import { ReactComponent as SVGEmail } from './images/email.svg'
import IMGProfile from './images/profile.jpeg'
import IMGTag1 from './images/tag1.png'
import IMGTag2 from './images/tag2.png'

export const About = (props) => {
  const { aboutRef } = props

  return (
    <section ref={aboutRef} className="row justify-content-md-center">
      <div className="col-md-6 about">
        <h1>About Me.</h1>
        <div className="row about-tags">
          <img src={IMGTag1} alt="Swiss-Polish Blockchain Association" />
          <img src={IMGTag2} alt="Crypto Valley" />
        </div>

        <div className="about-profile">
          <img src={IMGProfile} alt="profile" className="about-profile-img" />
        </div>
        <p>
          Hello! I am Nick Zbiegien. I am a software engineer with a master of engineering in computer science and
          <strong> 6+ years experience</strong> in creating quality web systems, with a year focused on{' '}
          decentralized applications (dApps) run on <strong>Ethereum</strong> blockchain. Currently
          moving towards the <strong>Polkadot / Substrate</strong> ecosystem.
        </p>
        <p>I worked on a spot in fin-tech companies in Poland, Uruguay and Sydney Australia.</p>
        <p>
          I am always eager to share my knowledge with others and I am a big fan of blockchain, defi, finance, banking,
          economics, personal development and simplifying peopleʼs lives.
        </p>
        <p>
          <strong>Areas:</strong>
        </p>
        <ul>
          <li>Full Stack</li>
          <li>Smart Contracts</li>
          <li>Front End interfaces</li>
          <li>Ethereum blockchain</li>
          <li>Polkadot blockchain</li>
          <li>Parachains</li>
          <li>Decentralized finance (DeFi)</li>
          <li>Tokenomics</li>
          <li>IPFS</li>
          <li>Oracles</li>
        </ul>
        <p>
          <strong>Skills:</strong>
        </p>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Rust</li>
          <li>Substrate</li>
          <li>Solidity</li>
          <li>Web3.0</li>
          <li>React</li>
          <li>Redux / Mobx</li>
          <li>Node</li>
          <li>CSS</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Test-driven development (TDD)</li>
          <li>Functional & Reactive programming</li>
        </ul>
        <p>
          Let's chat! {''}
          <a className="about-email" href="mailto:nick@deploy.at?subject=deploy.at" rel="noopener noreferrer">
            nick@deploy.at
          </a>
        </p>
        <p className="about-resume">
          * See my resume on
          <a href="https://linkedin.com/in/zbiegien/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          or
          <a href="mailto:nick@deploy.at?subject=deploy.at">email me</a>
          to get one.
        </p>
        <div className="about-social">
          <a href="https://linkedin.com/in/zbiegien/" target="_blank" rel="noopener noreferrer">
            <SVGLinkedin className="about-social-icon" />
          </a>
          <a href="https://github.com/deployAt/" target="_blank" rel="noopener noreferrer">
            <SVGGithub className="about-social-icon" />
          </a>
          <a href="mailto:nick@deploy.at?subject=deploy.at">
            <SVGEmail className="about-social-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
