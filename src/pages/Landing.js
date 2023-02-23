import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby yes plz gastropub adaptogen, vaporware meh Brooklyn
            cardigan copper mug neutra deep v 8-bit affogato. Paleo yuccie
            skateboard banjo shoreditch vibecession. Viral bushwick affogato,
            freegan lyft hashtag pug. Man bun kickstarter snackwave kitsch. Hot
            chicken shaman tattooed praxis tonx. Lyft keffiyeh bruh cred la
            croix. Poke ascot sriracha man braid tilde poutine, food truck
            hexagon bicycle rights thundercats. Mustache polaroid man bun bruh
            pour-over, dreamcatcher jean shorts truffaut letterpress biodiesel
            bushwick.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
