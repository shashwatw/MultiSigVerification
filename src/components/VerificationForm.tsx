import React from "react";

export const VerificationForm: React.FC = () => {
  return (
    <form className="w-full">
      <label
        htmlFor="partHash"
        className="mt-4 text-lg font-medium leading-loose"
      >
        Enter Part Hash
      </label>
      <input
        type="text"
        id="partHash"
        className="flex shrink-0 self-stretch bg-white rounded border border-gray-300 border-solid h-[42px] w-full"
        aria-label="Enter Part Hash"
      />
      <button
        type="submit"
        className="px-6 py-3 mt-4 text-base text-center text-white bg-blue-900 rounded max-md:px-5"
      >
        Verify Part
      </button>
    </form>
  );
};
