/* eslint-disable @next/next/no-img-element */
import { FreeTrial, PartnersSection } from "@/components";
import Accordion from "@/components/Accordion";
import AccordionItem from "@/components/AccordionItem";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingPlan from "@/components/PricingPlan";
import ToggleSwitch from "@/components/ToggleSwitch";
import React from "react";

function AvailableCheck() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-success rounded-full w-10 h-10 flex justify-center items-center">
        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
            />
          </svg>
        </div>
      </div>
      <p className="font-semibold">Unlimited product updates</p>
    </div>
  );
}

function UnavailableCheck() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-[#BDBDBD] rounded-full w-10 h-10 flex justify-center items-center">
        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
            />
          </svg>
        </div>
      </div>
      <p className="font-semibold">1GB Cloud storage</p>
    </div>
  );
}

export default function Pricing() {
  return (
    <div>
      <div className="py-20">
        <h4 className="font-semibold text-center mb-5">PRICING</h4>
        <h1 className="text-center font-semibold text-4xl mb-10">
          Simple Pricing
        </h1>
        <Breadcrumbs
          crumbs={[{ href: "/", title: "Home" }, { title: "Pricing" }]}
        />
      </div>
      <section className="bg-secondary-10 py-20">
        <h1 className="text-center font-bold text-3xl mb-5">Pricing</h1>
        <p className="text-center text-secondary mb-10">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="mb-10">
          <ToggleSwitch />
        </div>
        <section className="flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-10 mb-20">
          <div className="max-w-xs bg-white rounded-md p-8 border-2 border-primary">
            <h1 className="font-bold text-3xl text-center mb-10">FREE</h1>
            <p className="text-center text-xl mb-10">
              Organize across all apps by hand
            </p>
            <div className="flex justify-center space-x-3 mb-10">
              <h1 className="text-primary font-bold text-5xl">0</h1>
              <div className="flex gap-2 items-center">
                <div>
                  <h2 className="text-primary font-bold">$</h2>
                  <h2 className="text-primary font-semibold">Per Month</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <AvailableCheck />
              <AvailableCheck />
              <AvailableCheck />
              <UnavailableCheck />
              <UnavailableCheck />
            </div>
            <div className="flex justify-center">
              <button className="bg-black py-4 px-4 rounded-md text-white w-60">
                Try for free
              </button>
            </div>
          </div>
          <div className="bg-black rounded-md p-8 max-w-xs py-20">
            <h1 className="font-bold text-3xl text-center text-white mb-5">
              STANDARD
            </h1>
            <p className="text-center text-xl text-white mb-6">
              Organize across all <br /> apps by hand
            </p>
            <div className="flex justify-center space-x-3 mb-10">
              <h1 className="text-primary font-bold text-4xl">9.99</h1>
              <div className="flex gap-2 items-center">
                <div>
                  <h2 className="text-primary font-bold">$</h2>
                  <h2 className="text-primary font-semibold">Per Month</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-2 gap-3">
              <div className="mb-5 flex flex-col justify-center space-y-4">
                <div className="flex gap-2 items-center">
                  <div className="bg-success rounded-full w-10 h-10 flex justify-center items-center">
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-white">
                    Unlimited product updates
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-success rounded-full w-10 h-10 flex justify-center items-center">
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-white">
                    Unlimited product updates
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-success rounded-full w-10 h-10 flex justify-center items-center">
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-white">
                    Unlimited product updates
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-[#BDBDBD] rounded-full w-10 h-10 flex justify-center items-center">
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-white">1GB Cloud storage</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-[#BDBDBD] rounded-full w-10 h-10 flex justify-center items-center">
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-white">1GB Cloud storage</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-primary py-4 px-4 rounded-md text-white w-60">
                  Try for free
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs bg-white rounded-md p-8 border-2 border-primary">
            <h1 className="font-bold text-3xl text-center mb-10">PREMIUM</h1>
            <p className="text-center text-xl mb-10">
              Organize across all apps by hand
            </p>
            <div className="flex justify-center space-x-3 mb-10">
              <h1 className="text-primary font-bold text-4xl">19.99</h1>
              <div className="flex gap-2 items-center">
                <div>
                  <h2 className="text-primary font-bold">$</h2>
                  <h2 className="text-primary font-semibold">Per Month</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <AvailableCheck />
              <AvailableCheck />
              <AvailableCheck />
              <UnavailableCheck />
              <UnavailableCheck />
            </div>
            <div className="flex justify-center">
              <button className="bg-black py-4 px-4 rounded-md text-white w-60">
                Try for free
              </button>
            </div>
          </div>
        </section>
        <div>
          <p className="text-center mb-10 text-secondary">
            Trusted By Over 4000 Big Companies
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center md:space-x-5 lg:space-y-0 space-y-7">
            <img src="/logo/hooli_logo.svg" alt="" />
            <img src="/logo/lya_logo.svg" alt="" />
            <img src="/logo/logo.svg" alt="" />
            <img src="/logo/stripe_logo.svg" alt="" />
            <img src="/logo/aws_logo.svg" alt="" />
            <img src="/logo/redit_logo.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-10">Pricing FAQs</h1>
          <p className="text-secondary">
            Problems trying to resolve the conflict between <br /> the two major realms
            of Classical physics
          </p>
        </div>
        <Accordion />
        <p className="text-center text-secondary">Haven’t got your answer? Contact our support</p>
      </section>
      <section>
        <FreeTrial />
      </section>
    </div>
  );
}
