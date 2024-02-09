// components/PricingPlan.tsx
// import { PlanFeature, PricingPlanType } from "@/types";
import React from "react";

interface PlanFeature {
    name: string;
    isAvailable: boolean;
  }
  

const Feature: React.FC<PlanFeature> = ({ name, isAvailable }) => (
  <div className="flex items-center">
    <span
      className={`mr-2 ${isAvailable ? "text-green-500" : "text-gray-300"}`}
    >
      {isAvailable ? "✓" : "✗"}
    </span>
    <span className={`${isAvailable ? "text-gray-700" : "text-gray-400"}`}>
      {name}
    </span>
  </div>
);

 interface PricingPlanType {
    id: string;
    name: string;
    description: string;
    price: string;
    features: PlanFeature[];
    isHighlighted?: boolean;
  }
  

const PricingPlan: React.FC<{ plan: PricingPlanType }> = ({ plan }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        plan?.isHighlighted ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="my-2">{plan.description}</p>
      <p className="text-3xl font-bold">{plan.price}</p>
      <ul className="my-4">
        {plan.features.map((feature) => (
          <li key={feature.name}>
            <Feature name={feature.name} isAvailable={feature.isAvailable} />
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-4 py-2 rounded-lg ${
          plan.isHighlighted
            ? "bg-white text-blue-500"
            : "bg-blue-500 text-white"
        }`}
      >
        Try for free
      </button>
    </div>
  );
};

export default PricingPlan;
