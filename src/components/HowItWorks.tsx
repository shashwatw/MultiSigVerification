import React from "react";

type StepProps = {
  stepNumber: number;
  description: string;
};

const Step: React.FC<StepProps> = ({ stepNumber, description }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex overflow-hidden flex-col grow px-14 py-8 w-full text-center text-gray-800 bg-white rounded shadow-sm max-md:px-5 max-md:mt-8">
      <h3 className="self-center text-xl font-bold leading-snug">
        Step {stepNumber}
      </h3>
      <p className="mt-5 text-base">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { description: "Service center initiates a transaction." },
    { description: "Customer and company authority sign to verify." },
    { description: "Final transaction is stored on blockchain." },
  ];

  return (
    <section className="flex flex-col px-8 py-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-3xl font-bold leading-tight text-center text-gray-800">
        How It Works
      </h2>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {steps.map((step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
