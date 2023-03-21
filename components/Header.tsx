import React from "react";

const Header = () => {
  return (
    <section className="fixed  w-full h-28 z-[0]">
      <div className="text-white text-center">Artur Grzębski</div>
      <div className="text-white text-center">Frontend Developer</div>
      <img
        src="/22.jpg"
        alt="foto"
        className="w-60 h-60 rounded-full  items-center  justify-center"
      />
    </section>
  );
};

export default Header;
