import React from "react";
import Image from "next/image";

export function FreeTrial() {
  return (
    <div className="py-20 flex flex-col justify-center items-center space-y-10 md:mx-0 mx-5">
      <h1 className="font-bold text-3xl text-center">
        Start your 14 days free trial
      </h1>
      <p className="text-center text-secondary">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met
        sent. RELIT official consequent.
      </p>
      <button className="bg-primary py-4 px-4 rounded-md text-white w-60 font-semibold">
        Try it for free
      </button>
      <div className="flex items-center space-x-7">
        <Image src="/icons/facebook.svg" width={24} height={24} alt="" />
        <Image src="/icons/instagram.svg" width={24} height={24} alt="" />
        <Image src="/icons/twitter.svg" width={24} height={24} alt="" />
      </div>
    </div>
  );
}
