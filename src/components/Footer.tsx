import React from "react";
// eslint-disable-next-line
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center self-stretch px-20 py-8 w-full bg-blue-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[357px]">
        <p className="text-base text-center text-white max-md:ml-1">
          © 2023 Car Service Blockchain. All rights reserved.
        </p>
        <nav className="flex gap-9 self-start mt-4 text-base text-center text-white">
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>
        <div className="flex gap-4 self-center mt-4 w-20">
          <a href="#" aria-label="Facebook">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae4e6783c5c49e741f7740aaa81729aaddc42dd2a41941e1bb5ccf5ed509e4b?placeholderIfAbsent=true&apiKey=d49b04f14fbe495c8fcab43d401b2c8a"
              className="object-contain shrink-0 w-4 aspect-[0.67]"
              alt=""
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43cb954932ee8c1c004df002ffc736392e3f9b208319af9dbc6c92ce7ab6f1b3?placeholderIfAbsent=true&apiKey=d49b04f14fbe495c8fcab43d401b2c8a"
              className="object-contain shrink-0 w-4 aspect-[0.67]"
              alt=""
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61818564117f3ac182c63c96a7b51508cd1be58dc36979e2554dac7063f0040?placeholderIfAbsent=true&apiKey=d49b04f14fbe495c8fcab43d401b2c8a"
              className="object-contain shrink-0 w-4 aspect-[0.67]"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
