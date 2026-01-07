import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
            options={{
              strings: [
                "MERN Stack Developer",
                "Full Stack Web Developer",
                "AI & Prompt Engineering Enthusiast",
                "Problem Solver & Tech Learner"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
      )
}

export default Type