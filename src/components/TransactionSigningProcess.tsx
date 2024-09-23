import React from "react";

type Transaction = {
  id: number;
  status: string;
};

type TransactionSigningProcessProps = {
  pendingTransactions: Transaction[];
  onCustomerSign: () => void;
  onServiceCenterSign: () => void;
  onCompanySign: () => void;
  signatureProgress: number;
  lastSignedTimestamp: string;
};

const TransactionSigningProcess: React.FC<TransactionSigningProcessProps> = ({
  pendingTransactions,
  onCustomerSign,
  onServiceCenterSign,
  onCompanySign,
  signatureProgress,
  lastSignedTimestamp,
}) => {
  return (
    <section className="flex overflow-hidden flex-col p-8 mt-8 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
      <h2 className="self-start text-3xl font-bold leading-tight text-gray-800">
        Transaction Signing Process
      </h2>

      <div className="flex overflow-hidden flex-col items-start py-4 pr-20 pl-4 mt-4 text-base text-gray-800 bg-gray-100 rounded shadow-sm max-md:pr-5 max-md:max-w-full">
        <h3 className="text-xl font-bold leading-snug">Pending Transactions</h3>
        <ul className="mt-2 ml-5 max-md:ml-2.5">
          {pendingTransactions.map((transaction) => (
            <li key={transaction.id}>
              Transaction #{transaction.id} - {transaction.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden py-4 pr-20 mt-4 bg-gray-100 rounded shadow-sm max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-4">
              <h3 className="self-start ml-4 text-xl font-bold leading-snug text-gray-800 max-md:ml-2.5">
                Sign Transaction
              </h3>
              <div className="flex mt-2 space-x-2">
                <button
                  onClick={onCustomerSign}
                  className="flex-1 py-2 bg-green-600 rounded text-white"
                >
                  Customer Sign
                </button>
                <button
                  onClick={onServiceCenterSign}
                  className="flex-1 py-2 bg-blue-600 rounded text-white"
                >
                  Service Center Sign
                </button>
                <button
                  onClick={onCompanySign}
                  className="flex-1 py-2 w-full bg-red-600 rounded text-white"
                >
                  Company Authority Sign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col items-start p-4 mt-4 bg-gray-100 rounded shadow-sm max-md:max-w-full">
        <h3 className="text-xl font-bold leading-snug text-gray-800">
          Signature Progress
        </h3>
        <div className="flex flex-col items-start self-stretch mt-2 bg-gray-300 rounded-full max-md:pr-5 max-md:max-w-full">
          <div
            className="flex shrink-0 max-w-full h-4 bg-blue-900 rounded-full"
            style={{ width: `${signatureProgress * 100}%` }}
          />
        </div>
        <p className="mt-2 text-base text-gray-800">
          {signatureProgress * 3}/3 Signatures Completed
        </p>
      </div>

      <div className="flex overflow-hidden flex-col items-start py-4 pr-20 pl-4 mt-4 w-full text-gray-800 bg-gray-100 rounded shadow-sm max-md:pr-5 max-md:max-w-full">
        <h3 className="text-xl font-bold leading-snug">
          Final Signature Timestamp
        </h3>
        <div className="flex mt-2 text-base">
          <span className="grow">Last Signed On:</span>
          <time dateTime={lastSignedTimestamp}>{lastSignedTimestamp}</time>
        </div>
      </div>
    </section>
  );
};

export default TransactionSigningProcess;
