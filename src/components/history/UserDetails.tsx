import React from "react";

const UserDetails: React.FC = () => {
  return (
    <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col items-start pt-6 pr-20 pb-20 pl-6 mx-auto w-full text-base text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5 max-md:mt-8">
        <h2 className="text-xl font-bold leading-snug">User Details</h2>
        <div className="flex mt-4">
          <div className="grow font-bold">Name:</div>
          <div>John Doe</div>
        </div>
        <div className="flex whitespace-nowrap">
          <div className="font-bold">Role:</div>
          <div>Customer</div>
        </div>
        <div className="flex whitespace-nowrap">
          <div className="z-10 font-bold">Email:</div>
          <div className="basis-auto">john.doe@example.com</div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
