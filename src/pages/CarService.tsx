import React, { useState } from "react";
import Header from "../components/Header";
import TransactionForm from ".././components/TransactionForm";
import TransactionSigningProcess from ".././components/TransactionSigningProcess";
import Footer from ".././components/Footer";
import Header2 from "../components/Header";

const CarService: React.FC = () => {
  const [signatureProgress, setSignatureProgress] = useState(0);
  const [lastSignedTimestamp, setLastSignedTimestamp] = useState(
    "2023-10-01 12:34:56"
  );

  const handleLogout = () => {
    // Implement logout logic
  };

  const handleTransactionSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement transaction submission logic
  };

  const handleSign = () => {
    setSignatureProgress((prev) => Math.min(prev + 1 / 3, 1));
    setLastSignedTimestamp(new Date().toLocaleString());
  };

  const pendingTransactions = [
    { id: 1, status: "Awaiting Customer Signature" },
    { id: 2, status: "Awaiting Service Center Signature" },
    { id: 3, status: "Awaiting Company Signature" },
  ];

  const menuItems = [
    "Home",
    "About",
    "Features",
    "Transaction",
    "Verification",
    "Support",
  ];

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Header2 title="Car Service Blockchain" />
      <main className="flex-grow">
        <TransactionForm onSubmit={handleTransactionSubmit} />
        <TransactionSigningProcess
          pendingTransactions={pendingTransactions}
          onCustomerSign={handleSign}
          onServiceCenterSign={handleSign}
          onCompanySign={handleSign}
          signatureProgress={signatureProgress}
          lastSignedTimestamp={lastSignedTimestamp}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CarService;
