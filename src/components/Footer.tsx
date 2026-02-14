import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Ujjwal.dev</h2>
          <p className="mt-3 text-sm text-gray-400">
            Building modern web experiences with passion & performance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect
          </h3>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaGithub size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <BiLogoGmail size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ujjwal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer