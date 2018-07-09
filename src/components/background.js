import React from 'react'
import Parallax from 'react-rellax'
//import Particles from 'react-particles-js'

const Background = () => (
  <div>
  {/*<Parallax data-rellax-speed="3" className="circle red"></Parallax>
    <Parallax data-rellax-speed="4" className="circle purple"></Parallax>
<Parallax data-rellax-speed="3" className="circle blue"></Parallax>*/}
  <Parallax data-rellax-speed="4" className="circle"></Parallax>
  {/*<Parallax data-rellax-speed="1" className="circle2"></Parallax>*/}
  {/*<Parallax data-rellax-speed="3" className="circle yellow"></Parallax>
  <Parallax data-rellax-speed="3" className="circle green"></Parallax>*/}
  </div>
)

/*
const Background = () => (
  <Particles params={{
    particles: {
      number: {
        value: "3",
        density: {
          enable: true,
          value_area: 750
        }
      },
      color: {
        value: ["#f5bdc3", "#fa89a8", "#f7ccb9", "#bde4ab", "#8dd3ee", "#abe4d6", "#f7e6b9", "#c798d6", "#d2d3dd"]
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 60,
        random: true,
        anim: {
          enable: false,
          speed: 0,
          size_min: 0.1,
          sync: false
        }
      },
      opacity: {
        value: 0.35,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 0
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    retina_detect: true
  }}
  />
)
*/


export default Background
