import React from "react";

const ServiceHistory: React.FC = () => {
  const services = [
    { id: 1, name: "Service #1", status: "Completed" },
    { id: 2, name: "Service #2", status: "Completed" },
    { id: 3, name: "Service #3", status: "Pending" },
  ];

  return (
    <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-start pt-6 pr-20 pb-20 pl-6 w-full text-base text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5 max-md:mt-8">
        <h2 className="text-xl font-bold leading-snug">Service History</h2>
        <ul className="mt-4 ml-5 max-md:ml-2.5">
          {services.map((service) => (
            <li key={service.id}>
              {service.name} - {service.status}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceHistory;
