import React, { useEffect, useReducer } from "react";
import logo from "../logo.svg";
import Lorem from "./Lorem";
const ANIMATION_TIME = 2 * 1000;

const Home = () => {
  const [isMounted, toggleMounted] = useReducer((p) => !p, true);
  const [isAnimateAnmount, toggleAnimateUnmount] = useReducer((p) => !p, false);
  const [isVisible, toggleVisible] = useReducer((p) => (p ? 0 : 1), 0);

  useEffect(() => {
    if (isAnimateAnmount) {
      toggleVisible();
      toggleAnimateUnmount();
      setTimeout(() => {
        toggleMounted();
      }, ANIMATION_TIME);
    }
  }, [isAnimateAnmount]);

  useEffect(() => {
    toggleVisible();
  }, [isMounted]);

  return (
    <div>
      <button onClick={toggleAnimateUnmount}>toggle</button>
      <div>{isMounted ? "Mounted" : "Unmounted"}</div>
      {isMounted && (
        <div
          style={{
            fontSize: 60,
            opacity: isVisible,
            transition: "all 2s ease",
          }}
        >
          <Lorem />
        </div>
      )}
    </div>
  );
};

export default Home;
