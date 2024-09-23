import React from "react";

const VerificationStatus: React.FC = () => {
  const verifications = [
    { id: 1, name: "Part #1", status: "Verified" },
    { id: 2, name: "Part #2", status: "Not Verified" },
  ];

  return (
    <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-start pt-6 pr-20 pb-12 pl-6 w-full text-base text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5 max-md:mt-8">
        <h2 className="text-xl font-bold leading-snug">Verification Status</h2>
        <ul className="mt-4 ml-5 max-md:ml-2.5">
          {verifications.map((verification) => (
            <li key={verification.id}>
              {verification.name} - {verification.status}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VerificationStatus;
