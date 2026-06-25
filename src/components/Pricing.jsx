import { useState } from "react";
import "../css/Pricing.css";

export default function Pricing() {

  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Start building your resume",
      features: [
        "1 Resume",
        "Basic templates",
        "PDF download"
      ]
    },
    {
      name: "Professional",
      price: "$9.99",
      description: "For job seekers who want more",
      popular: true,
      features: [
        "Unlimited resumes",
        "Premium templates",
        "AI suggestions",
        "Cover letter builder"
      ]
    },
    {
      name: "Premium",
      price: "$19.99",
      description: "Complete career toolkit",
      features: [
        "Everything in Professional",
        "LinkedIn optimization",
        "Interview preparation",
        "Priority support"
      ]
    }
  ];


  return (
    <section className="pricing">

      <h1>Choose Your Resume Plan</h1>
      <p className="subtitle">
        Create professional resumes and land your dream job faster.
      </p>


      <div className="pricing-container">

        {plans.map((plan) => (

          <div 
            key={plan.name}
            className={`pricing-card ${
              plan.popular ? "popular" : ""
            } ${
              selectedPlan === plan.name ? "selected" : ""
            }`}
          >

            {plan.popular && (
              <span className="badge">
                Most Popular
              </span>
            )}


            <h2>{plan.name}</h2>

            <h3>
              {plan.price}
              <span>/month</span>
            </h3>

            <p>
              {plan.description}
            </p>


            <ul>
              {plan.features.map((feature)=>(
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}
            </ul>


            <button
              onClick={() => setSelectedPlan(plan.name)}
            >
              {
                selectedPlan === plan.name
                ? "Selected ✓"
                : "Choose Plan"
              }
            </button>

          </div>

        ))}

      </div>


      {
        selectedPlan && (
          <div className="confirmation">
            You selected the <strong>{selectedPlan}</strong> plan.
          </div>
        )
      }


    </section>
  );
}