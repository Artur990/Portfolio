import React from "react";
// import  ScrollTrigger  from "react-scroll-trigger";

const ScrollTriggerWrapper = ({ children, onEnter, onExit }: any) => {
  return (
    <ScrollTriggerWrapper onEnter={onEnter} onExit={onExit}>
      {children}
    </ScrollTriggerWrapper>
  );
};

export default ScrollTriggerWrapper;
