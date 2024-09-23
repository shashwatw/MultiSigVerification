import React from "react";

type TransactionFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  return (
    <section className="flex overflow-hidden flex-col py-8 mt-8 bg-white rounded shadow-sm max-md:max-w-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-start px-8 text-lg font-medium leading-loose text-gray-800 max-md:px-5 max-md:max-w-full"
      >
        <h2 className="text-3xl font-bold leading-tight">
          Initiate Transaction
        </h2>

        <label htmlFor="customerAddress" className="mt-4">
          Customer Address
        </label>
        <input
          type="text"
          id="customerAddress"
          className="flex shrink-0 self-stretch bg-white rounded border border-gray-300 border-solid h-[42px] max-md:max-w-full"
        />

        <label htmlFor="companyAddress" className="mt-4">
          Company Address
        </label>
        <input
          type="text"
          id="companyAddress"
          className="flex shrink-0 self-stretch bg-white rounded border border-gray-300 border-solid h-[42px] max-md:max-w-full"
        />

        <label htmlFor="serviceDetails" className="mt-4">
          Service Details
        </label>
        <textarea
          id="serviceDetails"
          className="flex shrink-0 self-stretch bg-white rounded border border-gray-300 border-solid h-[114px] max-md:max-w-full"
        ></textarea>

        <label htmlFor="uniquePartsId" className="mt-5">
          Unique Parts ID
        </label>
        <input
          type="text"
          id="uniquePartsId"
          className="flex shrink-0 self-stretch bg-white rounded border border-gray-300 border-solid h-[42px] max-md:max-w-full"
        />

        <button
          type="submit"
          className="py-3 mt-4 max-w-full text-base text-center text-white bg-blue-900 rounded w-[214px] max-md:pr-5"
        >
          Submit Transaction
        </button>
      </form>
    </section>
  );
};

export default TransactionForm;
