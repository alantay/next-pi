"use client";

import Logo from "../Logo";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";
import { createPortal } from "react-dom";

function Navigation({ className = "" }: { className?: string }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  const renderMenuPortal = () => {
    if (typeof window === "undefined") return null;
    const portalRoot = document.getElementById("portal-root");
    if (!portalRoot) return null;
    return createPortal(
      <div className="motion-preset-fade absolute top-22 h-1/2 w-full bg-gray-50 text-neutral-800">
        <ul className="flex flex-col items-center gap-4 py-20">
          <li>
            <Link href="/about" onClick={closeMobileNav}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMobileNav} href="/projects">
              Projects
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
        <Logo className="mr-18" />
        <ul className="hidden gap-10 space-x-4 font-sans text-lg font-semibold md:flex">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects" className="">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
        <button
          role="button"
          aria-controls="primary navigation mobile"
          aria-expanded="false"
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
