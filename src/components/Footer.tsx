import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <div>
      <footer className="lg:max-w-7xl md:max-w-4xl max-w-xs mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center py-5 lg:mx-0 md:mx-6">
          <div className="font-bold text-3xl mb-10">Bandage</div>
          <div className="flex items-center space-x-7">
            <Image src="/icons/facebook.svg" width={24} height={24} alt="" />
            <Image src="/icons/instagram.svg" width={24} height={24} alt="" />
            <Image src="/icons/twitter.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <hr className="py-5" />
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 lg:mx-0 md:mx-6">
          <div>
            <h2 className="font-bold mb-5">Company Info</h2>
            <ul className="flex flex-col space-y-4">
              <li className="font-bold text-secondary">About Us</li>
              <li className="font-bold text-secondary">Carrier</li>
              <li className="font-bold text-secondary">We are hiring</li>
              <li className="font-bold text-secondary">Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-5">Legal</h2>
            <ul className="flex flex-col space-y-4">
              <li className="font-bold text-secondary">About Us</li>
              <li className="font-bold text-secondary">Carrier</li>
              <li className="font-bold text-secondary">We are hiring</li>
              <li className="font-bold text-secondary">Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-5">Features</h2>
            <ul className="flex flex-col space-y-4">
              <li className="font-bold text-secondary">Business Marketing</li>
              <li className="font-bold text-secondary">User Analytic</li>
              <li className="font-bold text-secondary">Live Chat</li>
              <li className="font-bold text-secondary">Unlimited Support</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-5">Resources</h2>
            <ul className="flex flex-col space-y-4">
              <li className="font-bold text-secondary">IOS & Android</li>
              <li className="font-bold text-secondary">Watch a Demo</li>
              <li className="font-bold text-secondary">Customers</li>
              <li className="font-bold text-secondary">API</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-5">Get In Touch</h2>
            <div className="relative w-full mb-5">
              <input
                type="text"
                className="w-full border border-secondary py-4 px-5 pr-20 rounded-md"
                placeholder="Your Email"
              />
              <button className="absolute inset-y-0 right-0 px-4 bg-primary text-white rounded-r-md">
                Suscribe
              </button>
            </div>
            <p className="font-semibold text-secondary">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-secondary-10 py-6 mt-5">
        <p className="md:max-w-7xl max-w-xs mx-auto font-semibold text-secondary lg:mx-0 md:mx-6">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
