import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text: string;
  bgColor: string;
  onClick?: () => void; // Added onClick prop
};

const Button: React.FC<ButtonProps> = ({ text, bgColor, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 ${bgColor} text-white rounded-md shadow-md hover:opacity-90 transition-opacity`}
  >
    {text}
  </button>
);

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTransaction = () => {
    navigate("/car-service"); // Navigate to the /car-service page
  };

  const VerifyParts = () => {
    navigate("/verify-parts"); // Navigate to the /car-service page
  };
  return (
    <section className="flex flex-col justify-center items-center px-5 py-20 w-full text-center text-gray-800 bg-white overflow-x-hidden">
      <div className="flex flex-col items-center w-full max-w-[1006px] mx-auto">
        <h2 className="text-4xl font-bold leading-tight mb-4 max-md:text-3xl">
          Welcome to the Decentralized Car Service Transaction System
        </h2>
        <p className="mt-2 text-xl leading-relaxed mb-6 max-md:text-lg">
          Facilitating secure and transparent car service transactions using
          blockchain technology.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-9 w-full">
          <Button text="Learn More" bgColor="bg-blue-900" onClick={() => {}} />
          <Button
            text="Start Transaction"
            bgColor="bg-green-600"
            onClick={handleStartTransaction}
          />
          <Button
            text="Verify Parts"
            bgColor="bg-red-600"
            onClick={VerifyParts}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
