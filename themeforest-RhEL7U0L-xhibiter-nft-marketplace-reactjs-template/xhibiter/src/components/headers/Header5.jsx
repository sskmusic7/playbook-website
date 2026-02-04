import {
  addMobileMenuToggle,
  removeMenuActive,
} from "@/utlis/mobileMenuToggle";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header5() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    addMobileMenuToggle();
    return () => {
      removeMenuActive();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors ${
        scrolled ? "js-page-header--is-sticky" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
          <Link to="/" className="shrink-0 lg:mr-14">
            <img
              src="/img/logo.png"
              className="max-h-7 dark:hidden"
              alt="Xhibiter | NFT Marketplace"
            />
            <img
              src="/img/logo_white.png"
              className="hidden max-h-7 dark:block"
              alt="Xhibiter | NFT Marketplace"
            />
          </Link>

          <span className="mt-1 hidden font-display text-lg font-semibold lg:inline-block">
            Status
          </span>

          <a
            href="#"
            className="ml-auto inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >
            <span className="hidden lg:block">Subscribe to Updates</span>
            <span className="lg:hidden">Subscribe</span>
          </a>
        </div>
      </div>
    </header>
  );
}
