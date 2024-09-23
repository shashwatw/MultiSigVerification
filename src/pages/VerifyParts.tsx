import React from "react";
import { VerificationForm } from "../components/VerificationForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserDetails from "../components/history/UserDetails";
import ServiceHistory from "../components/history/ServiceHistory";
import TransactionsAwaitingSignatures from "../components/history/TransactionsAwaitingSignatures";
import VerificationStatus from "../components/history/VerificationStatus";
import RecentTransactions from "../components/history/RecentTransactions";
import PendingApprovals from "../components/history/PendingApprovals";
import Notifications from "../components/history/Notifications";

export const VerifyParts: React.FC = () => {
  return (
    <>
      <Header title="Car Service Blockchain" />
      <main className="flex flex-col text-gray-800">
        <section className="flex overflow-hidden flex-col items-start p-8 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
          <h1 className="text-3xl font-bold leading-tight">
            Part Hash Verification
          </h1>
          <VerificationForm />
        </section>
      </main>

      <main className="flex flex-col">
        <section className="flex overflow-hidden flex-col p-8 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
          <h1 className="self-start text-3xl font-bold leading-tight text-gray-800">
            Dashboard
          </h1>
          <div className="mt-4 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <UserDetails />
              <ServiceHistory />
              <TransactionsAwaitingSignatures />
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <VerificationStatus />
              <RecentTransactions />
              <PendingApprovals />
            </div>
          </div>
          <Notifications />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VerifyParts;
