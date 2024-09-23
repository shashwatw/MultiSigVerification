import React from "react";

const TransactionsAwaitingSignatures: React.FC = () => {
  const transactions = [
    { id: 1, name: "Transaction #1", status: "Awaiting Customer Signature" },
    { id: 2, name: "Transaction #2", status: "Awaiting Company Signature" },
  ];

  return (
    <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-start py-6 pr-20 pl-6 w-full text-base leading-6 text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5 max-md:mt-8">
        <h2 className="text-xl font-bold leading-7 w-[244px]">
          Transactions Awaiting Signatures
        </h2>
        <ul className="mt-4 ml-5 max-md:ml-2.5">
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.name} - {transaction.status}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TransactionsAwaitingSignatures;
