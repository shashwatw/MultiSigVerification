import React from "react";

type FeatureProps = {
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex overflow-hidden flex-col grow px-6 py-8 w-full text-center text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5 max-md:mt-8">
      <h3 className="self-center text-xl font-bold leading-snug">{title}</h3>
      <p className="mt-5 text-base">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Transparency",
      description: "All transactions are recorded on a public ledger.",
    },
    {
      title: "Security",
      description: "Blockchain ensures data integrity and security.",
    },
    {
      title: "Parts Verification",
      description: "Verify the authenticity of parts used in servicing.",
    },
    {
      title: "Multisignature Validation",
      description: "Transactions require signatures from all parties.",
    },
    {
      title: "Dispute Handling",
      description: "Efficiently handle and resolve customer complaints.",
    },
  ];

  return (
    <section className="flex flex-col py-20 w-full bg-white max-md:max-w-full">
      <h2 className="self-center text-3xl font-bold leading-tight text-center text-gray-800 ">
        Features
      </h2>
      <div className="flex flex-col px-6 mt-8 w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-2 flex-wrap max-md:flex-col">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
