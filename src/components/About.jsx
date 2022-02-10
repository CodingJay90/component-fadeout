import React, { useState } from "react";
import Fade from "./Fade";

const About = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>About page</h1>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "hide" : "show"}
      </button>
      <Fade show={show}>
        <div class="test"> HELLO </div>
      </Fade>
    </>
  );
};

export default About;
