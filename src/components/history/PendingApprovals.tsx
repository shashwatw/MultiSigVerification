import React from "react";

const PendingApprovals: React.FC = () => {
  const approvals = [
    { id: 1, name: "Approval #1", status: "Pending" },
    { id: 2, name: "Approval #2", status: "Approved" },
  ];

  return (
    <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-start pt-6 pr-20 pb-12 pl-6 w-full text-base text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5 max-md:mt-8">
        <h2 className="text-xl font-bold leading-snug">Pending Approvals</h2>
        <ul className="mt-4 ml-5 max-md:ml-2.5">
          {approvals.map((approval) => (
            <li key={approval.id}>
              {approval.name} - {approval.status}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PendingApprovals;
