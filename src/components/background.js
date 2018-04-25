import React from 'react'
import Particles from 'react-particles-js'

const Background = () => (
  <Particles params={{
    particles: {
      number: {
        value: "3",
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#fdcfdb", "#d2edf8", "#ededf1", "#e5f4dc", "#e9d5ee", "#fbe4e6", "#fcf5e2"]
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 40,
        random: true,
        anim: {
          enable: false,
          speed: 15,
          size_min: 0.1,
          sync: false
        }
      },
      opacity: {
        value: 0.65,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150
      },
      move: {
        enable: true,
        speed: 2,
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

export default Background
