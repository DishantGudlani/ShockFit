import React from 'react';
import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-start px-6 py-3">
      {/* Top Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-4"></div>

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full text-center sm:text-left">
        <span className="text-default-600 mb-2 sm:mb-0 sm:mr-3">
          Autorska prava ©️ Shockfit Epil. Razvio
        </span>

        <Link
          isExternal
          href="https://rsdtech.hu"
          title="rsdtech.hu homepage"
          className="ml-0 sm:ml-1"
        >
        <img
  src="/images/footer_logo.png"
  alt="RSD Tech Logo"
  width={80}
  height={80}
  className="rounded-md sm:-ml-3"
/>

        </Link>
      </div>
    </footer>
  );
};

export default Footer;
