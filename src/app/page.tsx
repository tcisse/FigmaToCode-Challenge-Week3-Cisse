/* eslint-disable @next/next/no-img-element */
import { PartnersSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="lg:max-w-7xl md:max-w-4xl max-w-sm mx-auto">
        <div className="flex md:flex-row items-center justify-between flex-col lg:mx-0 md:mx-6">
          <div className="flex flex-col space-y-10">
            <p className="text-xl font-bold">ABOUT COMPANY</p>
            <h1 className="md:text-7xl font-bold">ABOUT US</h1>
            <p className="text-secondary text-xl">
              We know how large objects will act, <br /> but things on a small
              scale
            </p>
            <button className="flex items-center space-x-4 justify-center bg-primary px-4 py-3 text-white font-semibold rounded-lg w-44">
              Get Quote Now
            </button>
          </div>
          <img src="/images/hero_image.svg" className="lg:w-[600px] w-64" alt="" />
        </div>
        <section className="flex md:flex-row flex-col md:space-x-10 items-center py-10 lg:mx-0 md:mx-6">
          <div className="md:mx-0 mx-4 md:mb-0 mb-4">
            <span className="text-red">Problems trying</span>
            <p className="font-bold text-xl w-3/4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
          <div className="md:mx-0 mx-4">
            <p className="text-secondary">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="flex md:flex-row flex-col justify-center md:space-x-10 md:space-y-0 space-y-10">
            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl font-bold">15K</p>
              <span className="font-bold text-secondary">Happy Customers</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl font-bold">150K</p>
              <span className="font-bold text-secondary">Monthly Visitors</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl font-bold">15</p>
              <span className="font-bold text-secondary">
                Countries Worldwide
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-7xl font-bold">100+</p>
              <span className="font-bold text-secondary">Top Partners</span>
            </div>
          </div>
        </section>
        <section className="py-20 lg:mx-0 md:mx-6 mx-4">
          <div className="relative flex justify-center">
            <div className="bg-primary rounded-full">
              <img
                src="/icons/play.svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
            </div>
            <img
              src="/images/cover.svg"
              className="rounded-2xl mx-auto flex justify-center"
              alt=""
            />
          </div>
        </section>
        <section className="py-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl mb-2">Meet Our Team</h1>
            <p className="md:w-1/2 text-center text-secondary mb-10">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics.
            </p>
            <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10">
              <div>
                <Image
                  src="/images/team_1.svg"
                  width={316}
                  height={231}
                  alt=""
                />
                <div className="flex flex-col space-y-5 text-center justify-center pt-5">
                  <h3>Username</h3>
                  <span>Profession</span>
                  <div className="flex justify-center items-center space-x-7">
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                    <img src="/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/team_2.svg"
                  width={316}
                  height={231}
                  alt=""
                />
                <div className="flex flex-col space-y-5 text-center justify-center pt-5">
                  <h3>Username</h3>
                  <span>Profession</span>
                  <div className="flex justify-center items-center space-x-7">
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                    <img src="/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/team_3.svg"
                  width={316}
                  height={231}
                  alt=""
                />
                <div className="flex flex-col space-y-5 text-center justify-center pt-5">
                  <h3>Username</h3>
                  <span>Profession</span>
                  <div className="flex justify-center items-center space-x-7">
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                    <img src="/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-20 bg-secondary-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4 md:mx-0 mx-10">
            Big Compagnies Are Here
          </h2>
          <p className="md:w-1/3 text-secondary mb-10 md:mx-0 mx-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <PartnersSection />
      </section>
      <section className="flex justify-between">
        <div className="bg-primary-10 w-full flex items-center justify-center md:py-0 py-10">
          <div className="mx-auto flex flex-col space-y-10 top-0 md:justify-normal justify-center items-center md:items-start md:max-w-4xl max-w-xs p-5">
            <h3 className="font-bold text-white">WORK WITH US</h3>
            <p className="font-bold text-4xl text-white md:text-start text-center">
              Now Let’s grow Yours
            </p>
            <p className="text-white md:w-1/2 md:text-start text-center">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="border border-white text-white py-4 w-44 rounded-lg">
              Button
            </button>
          </div>
        </div>
        <img src="/images/cta_image.svg" className="hidden lg:block" alt="" />
      </section>
    </div>
  );
}
