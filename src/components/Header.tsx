import React from "react";
import { useNavigate } from "react-router-dom";

type Header2Props = {
  title: string;
};

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "#about" },
  { name: "Features", path: "#features" },
  { name: "Transaction", path: "#transaction" },
  { name: "Verification", path: "#verification" },
  { name: "Support", path: "#support" },
];

const Header: React.FC<Header2Props> = ({ title }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuClick = (path: string) => {
    if (path.startsWith("/")) {
      navigate(path); // Navigate if it's a path
    } else {
      window.location.hash = path; // Scroll to section if it's a hash
    }
  };

  return (
    <header className="flex flex-wrap gap-10 py-4 w-full text-base text-white bg-blue-900 max-md:max-w-full">
      <h1 className="grow shrink text-3xl font-bold leading-tight w-[281px]">
        {title}
      </h1>
      <nav className="flex flex-wrap gap-6 my-auto whitespace-nowrap max-md:max-w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item.path)}
            className="hover:underline"
          >
            {item.name}
          </button>
        ))}
      </nav>
      <button className="self-start px-4 py-1.5 text-blue-900 whitespace-nowrap bg-white rounded">
        Login/Register
      </button>
    </header>
  );
};

export default Header;
