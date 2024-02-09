/* eslint-disable @next/next/no-img-element */
import { FreeTrial } from "@/components";
import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Teams() {
  return (
    <div>
      <section>
        <div className="md:py-20">
          <h4 className="font-semibold text-center mb-5">WHAT WE DO</h4>
          <h1 className="text-center font-semibold text-4xl mb-10">
            Innovation tailored for you
          </h1>
          <Breadcrumbs
            crumbs={[{ href: "/", title: "Home" }, { title: "Teams" }]}
          />
        </div>
      </section>
      <section className="py-10 flex md:flex-row flex-col justify-center w-full gap-2">
        <div>
          <img src="/images/teams-hero.svg" className="w-full" alt="" />
        </div>
        <div className="flex md:flex-col flex-row md:space-y-2 md:space-x-0 space-x-3">
          <div className="flex md:flex-row flex-col md:space-x-3 space-y-2">
            <img src="/images/team-shirt.svg" alt="" />
            <img src="/images/manequin.svg" alt="" />
          </div>
          <div className="flex md:flex-row flex-col md:space-x-3 space-y-2">
            <img src="/images/manequin-2.svg" alt="" />
            <img src="/images/manequin-3.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl mb-12">Meet Our Team</h1>
          <div className="space-y-10">
            <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10">
              <div>
                <Image
                  src="/images/team_1.svg"
                  width={316}
                  height={231}
                  alt=""
                />
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
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
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
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
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
                  <div className="flex justify-center items-center space-x-7">
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                    <img src="/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10">
              <div>
                <Image
                  src="/images/team_1.svg"
                  width={316}
                  height={231}
                  alt=""
                />
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
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
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
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
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
                  <div className="flex justify-center items-center space-x-7">
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                    <img src="/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10">
              <div>
                <Image
                  src="/images/team_1.svg"
                  width={316}
                  height={231}
                  alt=""
                />
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
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
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
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
                <div className="flex flex-col space-y-4 text-center justify-center pt-5">
                  <h3 className="font-bold">Username</h3>
                  <span className="font-bold text-secondary">Profession</span>
                  <div className="flex justify-center items-center space-x-7">
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                    <img src="/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <FreeTrial />
      </div>
    </div>
  );
}
