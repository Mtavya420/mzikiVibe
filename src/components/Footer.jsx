import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="mt-80x bg-fff3f4">
      <div className="px-40px pt-24px flex flex-col items-center gap-40px">
        <img src={logo} alt="Logo" className="w-200px h-40px" />
        <h5 className="pb-40px mt-20px">Made with ❤️ by Dullah Beyker</h5>
      </div>
    </footer>
  );
};

export default Footer;
