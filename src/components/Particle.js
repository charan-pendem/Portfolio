import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none" // 🔥 THIS IS THE KEY FIX
      }}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: false,
            opacity: 0.03
          },
          move: {
            direction: "right",
            speed: 0.05
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: false // ❌ disable click capture
            },
            onhover: {
              enable: false // ❌ disable hover capture
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default Particle;
