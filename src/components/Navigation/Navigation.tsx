"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "../Logo";
import styles from "./Navigation.module.css";

function Navigation({ className = "" }: { className?: string }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMobileNavOpen]);

  const renderMenuPortal = () => {
    if (typeof window === "undefined") return null;
    const portalRoot = document.getElementById("portal-root");
    if (!portalRoot) return null;
    return createPortal(
      <div className="motion-preset-fade bg-mobile-nav text-mobile-nav-link absolute top-18 h-screen w-full text-2xl">
        <ul className="flex flex-col items-center gap-4 py-20">
          <li>
            <Link href="/about" onClick={closeMobileNav}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMobileNav} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={closeMobileNav} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>,
      portalRoot,
    );
  };

  return (
    <nav aria-label="primary navigation" className={` ${className}`}>
      <div className="text-nav-link flex items-end justify-between pb-6">
        <Logo className="mr-18 text-gray-50" />
        <ul className="hidden gap-10 space-x-4 font-sans text-lg font-semibold md:flex">
          <li>
            <Link
              href="/about"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          role="button"
          aria-controls="primary navigation mobile"
          aria-expanded={isMobileNavOpen}
          className="w-6 md:hidden"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          <svg
            className={`${styles.hamburger} ${isMobileNavOpen ? styles.open : ""}`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="6" width="20" height="2" rx="1"></rect>
            <rect x="6" y="12" width="20" height="2" rx="1"></rect>
            <rect x="6" y="18" width="20" height="2" rx="1"></rect>
          </svg>
        </button>
      </div>
      {isMobileNavOpen && renderMenuPortal()}
    </nav>
  );
}

export default Navigation;
