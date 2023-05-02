import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="min-h-2/5 mb-16 h-auto w-full bg-black p-4 text-center text-white opacity-90">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Artur Grzębski</h3>
            <p>Email: artur.grzebski@icloud.com</p>
          </div>
          <div>
            <p className="mt-4 text-sm text-gray-200">
              &copy; {new Date().getFullYear()} Artur Grzębski. All Rights
              Reserved.
            </p>
            <ul className="space-y-2"></ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="flex justify-center space-x-4 md:justify-end">
              <a href="#" className="mr-4 hover:text-gray-300">
                <AiFillGithub className="h-7 w-7" />
              </a>
              <a href="#" className="mr-4 h-6 w-6 hover:text-gray-300">
                <AiFillLinkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
