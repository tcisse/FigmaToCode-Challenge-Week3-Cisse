"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="hidden lg:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-7">
          <div className="font-bold text-3xl">Bandage</div>
          <ul className="flex space-x-10">
            <Link
              href="/"
              className="font-semibold cursor-pointer hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/teams"
              className="font-semibold cursor-pointer hover:text-primary"
            >
              Teams
            </Link>
            <Link
              href="/pricing"
              className="font-semibold cursor-pointer hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-semibold cursor-pointer hover:text-primary"
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center space-x-10">
            <Link className="text-primary font-semibold" href="/">
              Login
            </Link>
            <button className="flex items-center space-x-4 bg-primary px-4 py-3 text-white font-semibold rounded-lg">
              Become a member
              <Image
                src="/icons/arrow_left.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
        </div>
      </header>

      <section className="lg:hidden block">
        <header className="flex flex-col items-center p-4 bg-white">
          <div className="flex items-center justify-between w-full mb-8">
            <h1 className="text-2xl font-bold">Bandage</h1>
            <div className="space-x-4">
              <button aria-label="Search">
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={24}
                  height={24}
                />
              </button>
              <button aria-label="Cart">
                <Image
                  src="/icons/cart.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                />
              </button>
              <button
                aria-label="Menu"
                className="lg:hidden"
                onClick={toggleMenu}
              >
                <Image
                  src="/icons/menu.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="w-full">
              <ul className="flex flex-col items-center space-y-4">
                <li>
                  <Link className="text-lg" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/teams">Teams</Link>
                </li>
                <li>
                  <Link className="text-lg" href="/pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
      </section>
    </div>
  );
}
