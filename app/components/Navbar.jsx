"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const basePath = router.basePath;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-colors  duration-300 ${
        scrolled ? "bg-slate-600" : "bg-transparent"
      } backdrop-filter backdrop-blur-lg bg-opacity-30`}
    >
      <div className="container mx-auto px-6 py-4  font-extralight items-center  gap-12 flex justify-between md:justify-start">
        <Link
          href={`${basePath}/#home`}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          Aditya
        </Link>
        <button
          type="button"
          className="text-white md:hidden  flex justify-between"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen
              ? "absolute top-12 bg-slate-300 left-0 pt-1 pl-5 pb-2.5 font-extra-light z-50 w-full"
              : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                href={`${basePath}/#projects`}
                className="block md:inline-block text-white mt-4 md:mt-0 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit?usp=sharing&ouid=115531536691684412006&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block md:inline-block text-white mt-4 md:mt-0 cursor-pointer"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href={`${basePath}/#aboutme`}
                className="block md:inline-block text-white mt-4 md:mt-0 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={`${basePath}/#skills`}
                className="block md:inline-block text-white mt-4 md:mt-0 cursor-pointer"
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
